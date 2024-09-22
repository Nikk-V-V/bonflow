const cashFlowDayCard = {
    title: 'День Грошового Потоку',
    type: 'Income',
    description:
        "Кожного разу, коли ви потрапляєте на або проходите поле 'День Грошового Потоку', ви отримуєте свій дохід з 'Дня Грошового Потоку' від Банку. Вам не потрібно просити про отримання цього доходу. Якщо ви забули отримати дохід під час ходу, коли ви потрапили на або пройшли це поле, ви все одно можете його отримати.",
};

const dreamCards = [
    {
        title: 'Парк, названий\nна вашу честь',
        type: 'Dream',
        coast: 225000,
        description:
            'Знесіть покинуте складське приміщення та побудуйте новий рекреаційний парк. Пожертвуйте поліцейську підстанцію для безпеки парку.',
    },
    {
        title: 'Приватний рибальський\nбудиночок на озері в Монтані',
        type: 'Dream',
        coast: 100000,
        description:
            'Рибальте з пристані цього віддаленого будиночка. Насолоджуйтеся 6 місяцями самотності. Включено використання літака-амфібії.',
    },
    {
        title: 'Каннський кінофестиваль',
        type: 'Dream',
        coast: 125000,
        description:
            'Вечірка зі зірками! Відвідайте Францію, а потім проведіть тиждень в Каннах, спілкуючись із знаменитостями. Ви навіть отримуєте роль у фільмі!',
    },
    {
        title: 'Перегони на яхтах',
        type: 'Dream',
        coast: 150000,
        description:
            'Ви та ваша команда летите в Перт, Австралія. Проведіть тиждень, змагаючись на 12-метровій яхті з найшвидшими човнами світу.',
    },
    {
        title: 'Фондовий ринок\nдля дітей',
        type: 'Dream',
        coast: 125000,
        description:
            'Фінансуйте бізнес-школу та інвестиційну школу для молодих капіталістів, навчаючи їх основам бізнесу. Школа включає міні-біржу, якою керують учні.',
    },
    {
        title: 'Древні\nазійські міста',
        type: 'Dream',
        coast: 150000,
        description:
            'Приватний літак і гід відвезуть вас та 5 друзів до найвіддаленіших місць Азії… де ще не було туристів.',
    },
    {
        title: 'Приватні місця\nна стадіоні\nдля улюбленої команди',
        type: 'Dream',
        coast: 200000,
        description:
            'Орендуйте приватний бокси на 12 осіб з харчуванням і напоями на стадіоні улюбленої команди.',
    },
    {
        title: 'Купити ліс',
        type: 'Dream',
        coast: 250000,
        description:
            'Зупиніть втрату древніх дерев. Пожертвуйте 1000 акрів лісу та створіть природну стежку для всіх.',
    },
    {
        title: 'Африканське фото сафарі',
        type: 'Dream',
        coast: 100000,
        description:
            'Візьміть із собою 6 друзів на дику сафарі, фотографуючи найекзотичніших тварин у світі. Насолоджуйтесь 5-зірковою розкішшю у вашому наметі.',
    },
    {
        title: 'Міні-ферма в місті',
        type: 'Dream',
        coast: 150000,
        description:
            'Створіть практичну еко-ферму, де міські діти зможуть навчитися доглядати за тваринами та рослинами.',
    },
    {
        title: 'Круїз по Середземному\nморю на приватній яхті',
        type: 'Dream',
        coast: 100000,
        description:
            'Відвідайте маленькі гавані в Італії, Франції та Греції протягом місяця разом з 12 друзями.',
    },
    {
        title: 'Корпус миру\nдля капіталістів',
        type: 'Dream',
        coast: 200000,
        description:
            'Створіть підприємницькі бізнес-школи в країнах третього світу. Інструкторами будуть бізнесмени, які жертвують своїм часом і знаннями.',
    },
    {
        title: 'Фантазія на островах Південного моря',
        type: 'Dream',
        coast: 100000,
        description:
            'Два місяці розкоші та відпочинку. Розслабляйтеся в теплих водах, на пустельних пляжах і насолоджуйтесь романтичними вечорами.',
    },
    {
        title: 'Бібліотека для дітей',
        type: 'Dream',
        coast: 175000,
        description:
            'Додайте крило до міської бібліотеки, присвячене молодим письменникам і художникам. Відомі митці часто відвідують ваш заклад, щоб підтримати вашу роботу.',
    },
    {
        title: 'Гольф по всьому світу',
        type: 'Dream',
        coast: 150000,
        description:
            'Візьміть із собою 3 друзів у тур по 50 найкращих полях для гольфу у світі, проживаючи в 5-зіркових курортах.',
    },
    {
        title: 'Бути "Джетсеттером"',
        type: 'Dream',
        coast: 250000,
        description:
            'Майте власний приватний літак на цілий рік, щоб подорожувати, куди завгодно, коли захочеться.',
    },
    {
        title: 'Врятувати морських ссавців',
        type: 'Dream',
        coast: 125000,
        description:
            'Фінансуйте та станьте членом екіпажу місячної дослідницької експедиції для захисту морських ссавців, що перебувають під загрозою зникнення.',
    },
    {
        title: '7 чудес світу',
        type: 'Dream',
        coast: 200000,
        description:
            'Подорожуйте літаком, човном, велосипедом, верблюдом, каное та лімузином до 7 чудес світу. Все включено у першокласну розкіш!',
    },
    {
        title: 'Науково-дослідний центр\nдля боротьби з раком\nта СНІДом',
        type: 'Dream',
        coast: 225000,
        description:
            'Ваші гроші допомагають зібрати найкращих дослідників та лікарів в одному місці, присвяченому боротьбі з цими двома хворобами.',
    },
    {
        title: 'Вечеря з президентом',
        type: 'Dream',
        coast: 100000,
        description:
            'Замовте стіл для 10 друзів на вечерю з президентом на урочистому балі для візитуючих дипломатів.',
    },
    {
        title: 'Гелікоптерні лижі\nу Швейцарських Альпах',
        type: 'Dream',
        coast: 150000,
        description:
            'Зимовий відпочинок з катанням на лижах з гелікоптера вдень та тусовками у гламурних клубах вночі. Ваше житло — середньовічний замок.',
    },
    {
        title: 'Подарунок віри',
        type: 'Dream',
        coast: 175000,
        description:
            'Ваша релігійна організація стрімко зростає. Необхідні нові будівлі. Ви жертвуєте на це...',
    },
    {
        title: 'Балотування на посаду мера',
        type: 'Dream',
        coast: 125000,
        description:
            'Ваш фінансовий досвід спонукає маси людей просити вас очолити місто. Ви балотуєтеся і, звичайно, виграєте. Це початок вашої президентської гонки.',
    },
];

const investmentCards = [
    {
        title: 'Купити\nзолоту шахту',
        type: 'Investment',
        initialCost: 150000,
        totalInvestment: 150000,
        cashFlow: 25000,
        CCR: null,
        successRoll: 3,
        bonusOnSuccess: 25000,
        description:
            '+$25,000/міс пасивний дохід, якщо викинете 3 або більше на одному кубику, інакше $0 пасивний дохід.',
    },
    {
        title: 'Виробник запчастин\nдля вантажівок',
        type: 'Investment',
        initialCost: 150000,
        totalInvestment: 150000,
        cashFlow: 5000,
        CCR: 0.4,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$5,000/міс пасивний дохід 40% CCR',
    },
    {
        title: 'Сервіс з обслуговування\nкондиціонерів та опалення',
        type: 'Investment',
        initialCost: 200000,
        totalInvestment: 200000,
        cashFlow: 10000,
        CCR: 0.6,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$10,000/міс пасивний дохід 60% CCR',
    },
    {
        title: 'Магазини швидкого\nхарчування (3 магазини)',
        type: 'Investment',
        initialCost: 120000,
        totalInvestment: 120000,
        cashFlow: 5000,
        CCR: 0.5,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$5,000/міс пасивний дохід 50% CCR',
    },
    {
        title: 'Франшиза бургерів',
        type: 'Investment',
        initialCost: 300000,
        totalInvestment: 300000,
        cashFlow: 9500,
        CCR: 0.38,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$9,500/міс пасивний дохід 38% CCR',
    },
    {
        title: 'Мережа сімейних\nресторанів',
        type: 'Investment',
        initialCost: 300000,
        totalInvestment: 300000,
        cashFlow: 14000,
        CCR: 0.56,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$14,000/міс пасивний дохід 56% CCR',
    },
    {
        title: 'Реклама посуду\nпо телебаченню',
        type: 'Investment',
        initialCost: 225000,
        totalInvestment: 225000,
        cashFlow: 50000,
        CCR: null,
        successRoll: 4,
        bonusOnSuccess: 50000,
        description:
            '+$50,000/міс пасивний дохід якщо викинете 4 або більше на одному кубику, інакше $0 пасивний дохід.',
    },
    {
        title: 'Хімчистка (2 магазини)',
        type: 'Investment',
        initialCost: 100000,
        totalInvestment: 100000,
        cashFlow: 3000,
        CCR: 0.36,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$3,000/міс пасивний дохід 36% CCR',
    },
    {
        title: 'Біотехнологічна\nкомпанія IPO',
        type: 'Investment',
        initialCost: 50000,
        totalInvestment: 50000,
        cashFlow: 0,
        CCR: null,
        successRoll: 5,
        bonusOnSuccess: 500000,
        description:
            'Купіть 500,000 акцій по 10¢/акція. Якщо викинете 5 або 6 на одному кубику, ціна акцій піднімається до $1/акція – отримаєте $500,000 готівкою від банку. Якщо викинете менше 5, отримаєте $0.',
    },
    {
        title: '200 одиниць міні-складів',
        type: 'Investment',
        initialCost: 200000,
        totalInvestment: 200000,
        cashFlow: 6000,
        CCR: 0.36,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$6,000/міс пасивний дохід 36% CCR',
    },
    {
        title: 'Франшиза\nпіцерії (2 локації)',
        type: 'Investment',
        initialCost: 225000,
        totalInvestment: 225000,
        cashFlow: 7000,
        CCR: 0.37,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$7,000/міс пасивний дохід 37% CCR',
    },
    {
        title: '60 одиниць\nитлового комплексу',
        type: 'Investment',
        initialCost: 300000,
        totalInvestment: 300000,
        cashFlow: 8000,
        CCR: 0.32,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$8,000/міс пасивний дохід 32% CCR',
    },
    {
        title: 'Програмна компанія IPO',
        type: 'Investment',
        initialCost: 25000,
        totalInvestment: 25000,
        cashFlow: 0,
        CCR: null,
        successRoll: 6,
        bonusOnSuccess: 500000,
        description:
            'Купіть 250,000 акцій по 10¢/акція. Якщо викинете 6 на одному кубику, ціна акцій піднімається до $2/акція – отримаєте $500,000 готівкою від банку. Якщо викинете менше 6, отримаєте $0.',
    },
    {
        title: 'Магазини\nфутболок (5 магазинів)',
        type: 'Investment',
        initialCost: 200000,
        totalInvestment: 200000,
        cashFlow: 8000,
        CCR: 0.48,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$8,000/міс пасивний дохід 48% CCR',
    },
    {
        title: 'Нафтова угода',
        type: 'Investment',
        initialCost: 300000,
        totalInvestment: 300000,
        cashFlow: 75000,
        CCR: null,
        successRoll: 4,
        bonusOnSuccess: 75000,
        description:
            '+$75,000/міс пасивний дохід якщо викинете 4 або більше на одному кубику, інакше $0 пасивний дохід.',
    },
    {
        title: 'Автомайстерня',
        type: 'Investment',
        initialCost: 150000,
        totalInvestment: 150000,
        cashFlow: 6000,
        CCR: 0.48,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$6,000/міс пасивний дохід 48% CCR',
    },
    {
        title: 'Салони краси (3 салони)',
        type: 'Investment',
        initialCost: 300000,
        totalInvestment: 300000,
        cashFlow: 10000,
        CCR: 0.48,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$10,000/міс пасивний дохід 48% CCR',
    },
    {
        title: 'Франшиза курячого\nфастфуду (2 локації)',
        type: 'Investment',
        initialCost: 300000,
        totalInvestment: 300000,
        cashFlow: 10000,
        CCR: 0.4,
        successRoll: null,
        bonusOnSuccess: null,
        description: '+$10,000/міс пасивний дохід 40% CCR',
    },
];

const risksCards = [
    {
        title: 'Судовий позов!',
        type: 'Risks',
        description: 'Сплатіть половину ваших готівкових коштів на захист.',
        amount: 0.5,
    },
    {
        title: 'Розлучення!',
        type: 'Risks',
        description: 'Втратьте всі ваші готівкові кошти.',
        amount: 1,
    },
    {
        title: 'Податкова перевірка!',
        type: 'Risks',
        description:
            'Сплатіть бухгалтерам і юристам половину ваших готівкових коштів.',
        amount: 0.5,
    },
];

const charityCard = {
    title: 'Благодійність',
    type: 'Charity',
    description:
        'За $100,000 ви можете кидати 1, 2 або 3 кубики на кожному ході.',
    donationAmount: 100000,
    possibleRolls: [1, 2, 3],
};

export default [
    cashFlowDayCard,
    investmentCards[0],
    dreamCards[0],
    investmentCards[1],
    charityCard,
    dreamCards[1],
    investmentCards[2],
    dreamCards[2],
    investmentCards[3],
    dreamCards[3],
    investmentCards[4],
    dreamCards[4],
    risksCards[0],
    dreamCards[5],
    investmentCards[5],
    dreamCards[6],
    cashFlowDayCard,
    dreamCards[7],
    investmentCards[6],
    dreamCards[8],
    investmentCards[7],
    dreamCards[9],
    investmentCards[8],
    dreamCards[10],
    investmentCards[9],
    dreamCards[11],
    investmentCards[10],
    dreamCards[12],
    risksCards[1],
    dreamCards[13],
    investmentCards[11],
    dreamCards[14],
    cashFlowDayCard,
    dreamCards[15],
    investmentCards[12],
    dreamCards[16],
    investmentCards[13],
    dreamCards[17],
    investmentCards[14],
    dreamCards[18],
    investmentCards[15],
    dreamCards[19],
    investmentCards[16],
    dreamCards[20],
    risksCards[2],
    dreamCards[21],
    investmentCards[17],
    dreamCards[22],
];
