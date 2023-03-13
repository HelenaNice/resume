// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
// var address = '55202, Pervomaisk, Ukraine'
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: '55202, Pervomaisk, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development.
       Whenever I start to work on a new project I learn the domain and try to understand 
       the idea of the project. Good team player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                    tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                    for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 14,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git',
          point: 7,
          isTop: false,
        },
        {
          name: 'Teminal',
          point: 9,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Dance',
          isMain: false,
        },
        {
          name: 'Travel',
          isMain: true,
        },
        {
          name: 'Couture',
          isMain: false,
        },
      ],
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'Hight School ',
          isEnd: true,
        },
        {
          name: 'University of Cambridge',
          isEnd: true,
        },
        {
          name: 'IT course',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Аттестат про середню освіту',
          id: '111111',
        },
        {
          name: 'Диплом спеціаліста',
          id: '222222',
        },
        {
          name: 'Свідоцтво про закінчення аспірантури',
          id: '3333333',
        },
      ],
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://IT-Brains.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: '',
          },
          projectAmount: 1,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'How to make your first resume',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'My first award',
                },
                {
                  name: 'My second award',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,

    // ↙ сюди вводимо JSON дані
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
