require("dotenv").config();
const { Router } = require("express");
const router = Router();
const { User } = require("../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const authConfig = require("../config/auth.js");
const {
  signUp,
  signIn,
  loginGoogle,
} = require("../controllers/user/authController.js");
const { getAdmin } = require("../controllers/admin/getAdmins.js");

router.post("/signUp", signUp);
router.post("/signIn", signIn);

//Get ALL users:
router.get("/", async (req, res) => {
  User.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      return e;
    });
});

//Get only normal users:
router.get("/users", async (req, res) => {
  User.findAll({
    where: { role: "user" },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      return e;
    });
});
//Get only admins:
router.get("/admins", async (req, res) => {
  User.findAll({
    where: { role: "admin" },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      return e;
    });
});

//Eliminar usuario
router.delete("/:id", async (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
      id: parseInt(req.params.id),
    },
  })
    .then(function (deletedRecord) {
      if (deletedRecord === 1) {
        res.status(200).json({ message: "Deleted successfully" });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

// GET /api/user/:id
// Trae un usuario por id
//primero el ID del user, luego el del admin
router.get("/:id/:id", getAdmin, async (req, res) => {
  await User.findByPk(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(500).send({ error: "Error" }));
});

// PUT /api/user/:id
// Actualizar datos de un usuario
router.put("/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((data) => {
      if (req.body.name && req.body.password) {
        let passwordEncrypted = bcrypt.hashSync(
          req.body.password,
          Number.parseInt(authConfig.rounds)
        );
        data
          .update({
            name: req.body.name,
            password: passwordEncrypted,
          })
          .then((response) => {
            res.status(200).json(response);
          })
          .catch((e) => {
            res.status(500).json({ e });
          });
      } else if (req.body.name) {
        data
          .update({
            name: req.body.name,
          })
          .then((response) => {
            res.status(200).json(response);
          })
          .catch((e) => {
            res.status(500).json({ e });
          });
      } else {
        let passwordEncrypted = bcrypt.hashSync(
          req.body.password,
          Number.parseInt(authConfig.rounds)
        );
        data
          .update({
            password: passwordEncrypted,
          })
          .then((response) => {
            res.status(200).json({ name: req.body.name });
          })
          .catch((e) => {
            res.status(500).json({ e });
          });
      }
    })
    .catch((e) => res.status(500).json({ e }));
});

// PUT /api/user/roleadmin/:id
// Hacer admin a un usuario
router.put("/roleadmin/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then((data) => {
      data
        .update({
          role: req.body.role,
        })
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((e) => {
          res.status(500).json({ e });
        });
    })
    .catch((e) => res.status(500).json({ e }));
});

const token = Math.floor(Math.random() * 1000000 + 1);

// Gmail account
// moviemarkstore@gmail.com
// Store123

// Forgot password
// Enviar email al usuario
// Json{ "email":"email@email.com"}
router.post("/forgot", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      res.status(200).send({ error: "Invalid email" });
    } else {
      user
        .update({
          ...user,
          passwordResetToken: token,
        })
        .then(() => {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "moviemarkstore@gmail.com",
              pass: "Store123",
            },
          });
          const resetLink = "http://localhost:3000/login/reset";
          const mailOptions = {
            from: "MovieMark <moviemarkstore@gmail.com>",
            to: req.body.email,
            subject: "Reset your password",
            html: `<html>
                        <head>
                            <body>
                                <h3>To reset your password follow this link ${resetLink} and enter this token: 
                    ${token}</h3>
                            </body>
                        </head>
                    </html>`,
          };
          transporter.sendMail(mailOptions, (e, success) => {
            e
              ? res.status(500).send(e.message)
              : res.status(200).send({ success: "Done" });
          });
        });
    }
  });
});

// Reset password
// Aca se ingresa el token y el nuevo password
// Json{ "passwordResetToken":"tokenemail","password":"nuevopass"}
router.post("/reset", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { passwordResetToken: req.body.passwordResetToken },
    });
    if (!user) res.status(200).send({ error: "Token not valid" });
    else {
      const hash = bcrypt.hashSync(
        req.body.password,
        Number.parseInt(authConfig.rounds)
      );
      const aux = await user.update({
        ...user,
        password: hash,
        passwordResetToken: null,
        allowed: true,
      });
      res.status(200).send({ success: "Password reset done" });
    }
  } catch (e) {
    res.status(200).send({ error: "ERROR" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    let randomNumberToAppend = toString(Math.floor(Math.random() * 1000 + 1));
    let randomIndex = Math.floor(Math.random() * 10 + 1);
    let hashedRandomNumberToAppend = await bcrypt.hash(
      randomNumberToAppend,
      10
    );

    req.token = req.token + hashedRandomNumberToAppend;
    return res.status(200).json("logout");
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// router.post('/loginGoogle', loginGoogle);

//Newsletter
router.post("/newsletter", async (req, res) => {
  let users = await User.findAll();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "moviemarkstore@gmail.com",
      pass: "Store123",
    },
  });

  const {
    title,
    img,
    description,

    titletwo,
    imgtwo,
    descriptiontwo,

    titlethree,
    imgthree,
    descriptionthree,
  } = req.body;
  for (let i = 0; i < users.length; ++i) {
    const mailOptions = {
      from: "MovieMark <moviemarkstore@gmail.com>",
      to: users[i].email,
      subject: "This week's highlights",
      html: `<html>
                <head>
                    <style>
                        div{
                            text-align: center;
                        }
                    </style>
                    <body>
                        <div>
                        <img src="cid:uniqueimg@kreata.ee"/>
                        <h1>Hi ${users[i].name}!</h1>
                        </div>
                        <h2>We want to recommend you a couple of movies, so you can go to the cinema and enjoy with all your friends and family!</h2>
                        <h3>${title}</h3>
                        <img src="cid:uniqueimgone@kreata.ee"/>
                        <p>${description}</p>

                        <h3>${titletwo}</h3>
                        <img src="cid:uniqueimgtwo@kreata.ee"/>
                        <p>${descriptiontwo}</p>

                        <h3>${titlethree}</h3>
                        <img src="cid:uniqueimgthree@kreata.ee"/>
                        <p>${descriptionthree}</p>
                    </body>
                </head>
            </html>`,
      attachments: [
        {
          filename: "image.png",
          path: "https://i.imgur.com/INE654E.png",
          cid: "uniqueimg@kreata.ee",
        },
        {
          filename: "title.png",
          path: req.body.img,
          cid: "uniqueimgone@kreata.ee",
        },
        {
          filename: "titletwo.png",
          path: req.body.imgtwo,
          cid: "uniqueimgtwo@kreata.ee",
        },
        {
          filename: "titlethree.png",
          path: req.body.imgthree,
          cid: "uniqueimgthree@kreata.ee",
        },
      ],
    };
    transporter.sendMail(mailOptions, (e, success) => {
      // e
      // ?res.status(500).send(e.message)
      // :res.status(200).send({success:'Done'});
    });
  }
  res.status(200).send({ success: "Done" });
});

//Revocar password de user desde admin (beta)
router.put("/revoke/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then((data) => {
      data
        .update({
          allowed: false,
        })
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((e) => {
          res.status(500).json({ e });
        });
    })
    .catch((e) => res.status(500).json({ e }));
});

module.exports = router;
