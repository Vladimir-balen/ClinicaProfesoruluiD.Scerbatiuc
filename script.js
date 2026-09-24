
/* ── I18N ────────────────────────────────────── */
const LANGS = {
  ru: {
    nav_services:'Услуги', nav_team:'Команда', nav_booking:'Запись', nav_contacts:'Контакты', nav_cta:'Записаться',
    hero_eyebrow:'Стоматологическая клиника',
    hero_desc:'Профессиональная забота о вашей улыбке. Современные технологии, безупречный результат и комфорт на каждом этапе лечения.',
    hero_cta:'Записаться на приём', hero_services:'Наши услуги',
    stat_years:'+ лет опыта', stat_patients:'+ Пациентов', stat_satisfied:'% Довольны',
    svc_tag:'Наши услуги',
    svc_title:'Полный спектр<br><em>стоматологических</em> услуг',
    svc_desc:'Мы используем только передовые технологии и качественные материалы для достижения наилучших результатов.',
    strip_title:'Почему пациенты выбирают <em>нас</em>',
    strip_desc:'Мы создаём атмосферу доверия и заботы. Каждый пациент для нас уникален, и мы подходим к каждому случаю с максимальной внимательностью.',
    feat1:'Лет клинического опыта', feat2:'Успешных случаев лечения', feat3:'Специалиста высшей категории', feat4:'Стерильность инструментов',
    team_tag:'Наша команда', team_title:'Врачи, которым <em>доверяют</em>',
    team_desc:'Опытные специалисты с многолетней практикой, постоянно совершенствующие свои навыки.',
    team1_name:'Григориев Владимир', team1_badge:'Доктор мед. наук', team1_role:'Доктор медицинских наук',
    team2_name:'Еденюк Александр', team2_badge:'Стоматолог', team2_role:'Стоматолог общей практики',
    team3_name:'Исаков Иван', team3_badge:'Стоматолог', team3_role:'Стоматолог общей практики',
    team4_name:'Ериоменко Игорь', team4_badge:'Хирург · Имплантолог', team4_role:'Стоматолог, хирург-имплантолог',
    team5_name:'Скутару Лия', team5_badge:'Терапевт · Пародонтолог', team5_role:'Стоматолог-терапевт, пародонтолог',
    team6_name:'Хангану Виктория', team6_badge:'Ортодонт', team6_role:'Стоматолог-ортодонт',
    team7_name:'Виорика Мындреску', team7_badge:'Ассистент', team7_role:'Старший ассистент',
    team8_name:'Елена Масляева', team8_badge:'Ассистент', team8_role:'Ассистент врача',
    doc1_badge:'Главный врач', doc1_role:'Хирург-стоматолог · Имплантолог',
    doc1_bio:'Более 15 лет опыта в области хирургической стоматологии и имплантологии. Регулярно проходит обучение в ведущих клиниках Европы.',
    doc2_badge:'Ортодонт', doc2_role:'Ортодонт · Терапевт-стоматолог',
    doc2_bio:'Специалист по коррекции прикуса и эстетической реставрации зубов. Мастер художественной реставрации с безупречным вкусом.',
    book_tag:'Свяжитесь с нами', book_title:'Запишитесь на <em>приём</em>', book_desc:'Оставьте заявку любым удобным способом — мы свяжемся с вами для подтверждения записи.',
    contact_info_title:'Контактная информация', ct_phone_lbl:'Телефон', ct_addr_lbl:'Адрес', ct_hours_lbl:'График работы',
    book_form_title:'Отправьте нам сообщение', book_form_sub:'Заполните форму — мы ответим удобным для вас способом связи',
    form_name:'Ваше имя', form_phone:'Номер телефона', form_message:'Ваше сообщение', form_message_ph:'Опишите причину обращения...',
    cc_label:'Выберите предпочтительный способ связи:',
    cc_whatsapp:'Отправить через WhatsApp', cc_viber:'Написать в Viber', cc_telegram:'Написать в Telegram', cc_call:'Позвонить сейчас', cc_email:'Написать на почту',
    cc_msg_name:'Имя', cc_msg_phone:'Телефон', cc_msg_msg:'Сообщение', cc_email_subject:'Заявка с сайта клиники',
    form_alert_name_phone:'Пожалуйста, укажите имя и номер телефона.',
    ft_desc:'Современная стоматологическая клиника в Кишинёве. Ваша улыбка — наша главная цель.',
    ft_nav:'Навигация', ft_hours:'Режим работы', ft_contacts:'Контакты',
    h_weekdays:'Пн – Пт', h_sat:'Суббота', h_sun:'Воскресенье', h_closed:'Выходной',
    ft_copy:'© 2025 Clinica profesorului D. Scerbatiuc. Все права защищены.',
    svc_diagnostics:'Диагностика',
    svc_therapy:'Терапевтическая стоматология',
    svc_periodontology:'Пародонтология',
    svc_surgery:'Хирургия',
    svc_orthopedics:'Ортопедия',
    svc_aesthetics:'Эстетика',
    svc_cat_desc_diagnostics:'Первичный осмотр, рентгенодиагностика и составление плана лечения.',
    svc_cat_desc_therapy:'Лечение кариеса, пульпита, периодонтита и молочных зубов.',
    svc_cat_desc_periodontology:'Профессиональная чистка, снятие зубного камня и лечение дёсен.',
    svc_cat_desc_surgery:'Удаление зубов, вскрытие абсцессов и хирургические вмешательства.',
    svc_cat_desc_orthopedics:'Коронки, протезы, мосты и восстановление зубного ряда.',
    svc_cat_desc_aesthetics:'Эстетическая коррекция формы, цвета и вида зубов.',
    svc_details_price:'Стоимость',
    svc_details_book:'Записаться на эту услугу',
    svc_details_close:'Закрыть',
  },
  ro: {
    nav_services:'Servicii', nav_team:'Echipă', nav_booking:'Programare', nav_contacts:'Contacte', nav_cta:'Programează-te',
    hero_eyebrow:'Clinică stomatologică',
    hero_desc:'Îngrijire profesională pentru zâmbetul tău. Tehnologii moderne, rezultate impecabile și confort la fiecare etapă a tratamentului.',
    hero_cta:'Programează-te', hero_services:'Serviciile noastre',
    stat_years:'+ ani experiență', stat_patients:'+ Pacienți', stat_satisfied:'% Mulțumiți',
    svc_tag:'Serviciile noastre',
    svc_title:'Spectru complet de<br><em>servicii stomatologice</em>',
    svc_desc:'Utilizăm doar tehnologii avansate și materiale de calitate pentru cele mai bune rezultate.',
    strip_title:'De ce pacienții ne aleg pe <em>noi</em>',
    strip_desc:'Creăm o atmosferă de încredere și grijă. Fiecare pacient este unic pentru noi și abordăm fiecare caz cu maximă atenție.',
    feat1:'Ani de experiență clinică', feat2:'Cazuri de tratament reușite', feat3:'Specialiști de categorie superioară', feat4:'Sterilitatea instrumentelor',
    team_tag:'Echipa noastră', team_title:'Medici în care ai <em>încredere</em>',
    team_desc:'Specialiști cu experiență îndelungată, care își îmbunătățesc constant abilitățile.',
    team1_name:'Vladimir Grigoriev', team1_badge:'Dr. în șt. medicale', team1_role:'Doctor în științe medicale',
    team2_name:'Alexandru Edeniuc', team2_badge:'Stomatolog', team2_role:'Stomatolog generalist',
    team3_name:'Ivan Isakov', team3_badge:'Stomatolog', team3_role:'Stomatolog generalist',
    team4_name:'Igor Eriomenco', team4_badge:'Chirurg · Implantolog', team4_role:'Stomatolog, chirurg-implantolog',
    team5_name:'Lia Scutaru', team5_badge:'Terapeut · Parodontolog', team5_role:'Stomatolog-terapeut, parodontolog',
    team6_name:'Victoria Hanganu', team6_badge:'Ortodont', team6_role:'Stomatolog-ortodont',
    team7_name:'Viorica Mîndrescu', team7_badge:'Asistent', team7_role:'Asistentă principală',
    team8_name:'Elena Masleaeva', team8_badge:'Asistent', team8_role:'Asistenta medicului',
    doc1_badge:'Medic principal', doc1_role:'Chirurg stomatolog · Implantolog',
    doc1_bio:'Peste 15 ani de experiență în chirurgie stomatologică și implantologie. Urmează regulat cursuri de formare în clinici europene de top.',
    doc2_badge:'Ortodont', doc2_role:'Ortodont · Stomatolog terapeut',
    doc2_bio:'Specialist în corecția mușcăturii și restaurare estetică dentară. Maestru al restaurării artistice cu gust impecabil.',
    book_tag:'Contactați-ne', book_title:'Programează-te la <em>consultație</em>', book_desc:'Lăsați o solicitare prin metoda care vă convine — vă vom contacta pentru confirmarea programării.',
    contact_info_title:'Informații de contact', ct_phone_lbl:'Telefon', ct_addr_lbl:'Adresă', ct_hours_lbl:'Program de lucru',
    book_form_title:'Trimiteți-ne un mesaj', book_form_sub:'Completați formularul — vă vom răspunde prin metoda preferată de contact',
    form_name:'Numele dvs.', form_phone:'Număr de telefon', form_message:'Mesajul dvs.', form_message_ph:'Descrieți motivul solicitării...',
    cc_label:'Alegeți metoda preferată de contact:',
    cc_whatsapp:'Trimite prin WhatsApp', cc_viber:'Scrie pe Viber', cc_telegram:'Scrie pe Telegram', cc_call:'Sună acum', cc_email:'Scrie pe email',
    cc_msg_name:'Nume', cc_msg_phone:'Telefon', cc_msg_msg:'Mesaj', cc_email_subject:'Solicitare de pe site-ul clinicii',
    form_alert_name_phone:'Vă rugăm indicați numele și numărul de telefon.',
    ft_desc:'Clinică stomatologică modernă în Chișinău. Zâmbetul tău — scopul nostru principal.',
    ft_nav:'Navigare', ft_hours:'Program de lucru', ft_contacts:'Contacte',
    h_weekdays:'Lun – Vin', h_sat:'Sâmbătă', h_sun:'Duminică', h_closed:'Zi liberă',
    ft_copy:'© 2025 Clinica profesorului D. Scerbatiuc. Toate drepturile rezervate.',
    svc_diagnostics:'Diagnostic',
    svc_therapy:'Stomatologie terapeutică',
    svc_periodontology:'Parodontologie',
    svc_surgery:'Chirurgie',
    svc_orthopedics:'Ortopedie',
    svc_aesthetics:'Estetică',
    svc_cat_desc_diagnostics:'Examinare inițială, radiologie și elaborarea planului de tratament.',
    svc_cat_desc_therapy:'Tratamentul cariei, pulpitei, periodontitei și dinților de lapte.',
    svc_cat_desc_periodontology:'Curățare profesională, detartraj și tratamentul gingiilor.',
    svc_cat_desc_surgery:'Extracții dentare, drenaj abces și intervenții chirurgicale.',
    svc_cat_desc_orthopedics:'Coroane, proteze, punți și restaurarea arcadei dentare.',
    svc_cat_desc_aesthetics:'Corecția estetică a formei, culorii și aspectului dinților.',
    svc_details_price:'Preț',
    svc_details_book:'Programare pentru acest serviciu',
    svc_details_close:'Închide',
  },
  en: {
    nav_services:'Services', nav_team:'Team', nav_booking:'Book', nav_contacts:'Contacts', nav_cta:'Book Now',
    hero_eyebrow:'Dental Clinic',
    hero_desc:'Professional care for your smile. Modern technology, impeccable results and comfort at every stage of treatment.',
    hero_cta:'Book an Appointment', hero_services:'Our Services',
    stat_years:'+ years experience', stat_patients:'+ Patients', stat_satisfied:'% Satisfied',
    svc_tag:'Our Services',
    svc_title:'Full range of<br><em>dental services</em>',
    svc_desc:'We use only advanced technologies and quality materials to achieve the best results.',
    strip_title:'Why patients choose <em>us</em>',
    strip_desc:'We create an atmosphere of trust and care. Every patient is unique to us and we approach each case with maximum attention.',
    feat1:'Years of clinical experience', feat2:'Successful treatment cases', feat3:'Top-category specialists', feat4:'Instrument sterility',
    team_tag:'Our Team', team_title:'Doctors patients <em>trust</em>',
    team_desc:'Experienced specialists with many years of practice, constantly improving their skills.',
    team1_name:'Vladimir Grigoriev', team1_badge:'Dr. of Medical Sciences', team1_role:'Doctor of Medical Sciences',
    team2_name:'Alexander Edeniuc', team2_badge:'Dentist', team2_role:'General Dentist',
    team3_name:'Ivan Isakov', team3_badge:'Dentist', team3_role:'General Dentist',
    team4_name:'Igor Eriomenko', team4_badge:'Surgeon · Implantologist', team4_role:'Dentist, Oral Surgeon & Implantologist',
    team5_name:'Lia Scutaru', team5_badge:'Therapist · Periodontist', team5_role:'Dental Therapist, Periodontist',
    team6_name:'Victoria Hanganu', team6_badge:'Orthodontist', team6_role:'Orthodontist',
    team7_name:'Viorica Mindrescu', team7_badge:'Assistant', team7_role:'Senior Assistant',
    team8_name:'Elena Maslyaeva', team8_badge:'Assistant', team8_role:'Dental Assistant',
    doc1_badge:'Head Doctor', doc1_role:'Dental Surgeon · Implantologist',
    doc1_bio:'Over 15 years of experience in surgical dentistry and implantology. Regularly trains at leading European clinics.',
    doc2_badge:'Orthodontist', doc2_role:'Orthodontist · Therapeutic Dentist',
    doc2_bio:'Specialist in bite correction and aesthetic dental restoration. Master of artistic restoration with impeccable taste.',
    book_tag:'Get in Touch', book_title:'Book an <em>Appointment</em>', book_desc:'Leave a request through any convenient channel — we will contact you to confirm.',
    contact_info_title:'Contact Information', ct_phone_lbl:'Phone', ct_addr_lbl:'Address', ct_hours_lbl:'Working Hours',
    book_form_title:'Send Us a Message', book_form_sub:"Fill in the form — we'll reply via your preferred contact method",
    form_name:'Your Name', form_phone:'Phone Number', form_message:'Your Message', form_message_ph:'Describe the reason for your visit...',
    cc_label:'Choose your preferred way to contact us:',
    cc_whatsapp:'Send via WhatsApp', cc_viber:'Message on Viber', cc_telegram:'Message on Telegram', cc_call:'Call Now', cc_email:'Send an Email',
    cc_msg_name:'Name', cc_msg_phone:'Phone', cc_msg_msg:'Message', cc_email_subject:'Request from the clinic website',
    form_alert_name_phone:'Please enter your name and phone number.',
    ft_desc:'Modern dental clinic in Chișinău. Your smile is our main goal.',
    ft_nav:'Navigation', ft_hours:'Working Hours', ft_contacts:'Contacts',
    h_weekdays:'Mon – Fri', h_sat:'Saturday', h_sun:'Sunday', h_closed:'Day off',
    ft_copy:'© 2025 Clinica profesorului D. Scerbatiuc. All rights reserved.',
    svc_diagnostics:'Diagnostics',
    svc_therapy:'Therapeutic Dentistry',
    svc_periodontology:'Periodontology',
    svc_surgery:'Surgery',
    svc_orthopedics:'Orthopedics',
    svc_aesthetics:'Aesthetics',
    svc_cat_desc_diagnostics:'Initial examination, X-ray diagnostics and treatment planning.',
    svc_cat_desc_therapy:'Treatment of cavities, pulpitis, periodontitis and milk teeth.',
    svc_cat_desc_periodontology:'Professional cleaning, tartar removal and gum treatment.',
    svc_cat_desc_surgery:'Tooth extractions, abscess drainage and surgical procedures.',
    svc_cat_desc_orthopedics:'Crowns, dentures, bridges and dental arch restoration.',
    svc_cat_desc_aesthetics:'Aesthetic correction of tooth shape, colour and appearance.',
    svc_details_price:'Price',
    svc_details_book:'Book this service',
    svc_details_close:'Close',
  }
};

let currentLang = 'ru';
let currentServiceIndex = null;

function setLang(lang) {
  currentLang = lang;
  const t = LANGS[lang];

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  rebuildServices();

  const svcModal = document.getElementById('serviceDetailModal');
  if (svcModal.classList.contains('open') && currentServiceIndex !== null) {
    openServiceDetail(SERVICES_DATA[currentLang][currentServiceIndex], currentServiceIndex);
  }
}

/* ── SERVICES DATA (from Doc1.doc price list) ─────── */
const SERVICES_DATA = {
  ru:[
    /* ── ДИАГНОСТИКА ── */
    {
      icon:'images/icons_for_services_02.gif', name:'Консультация врача', cat:'diagnostics',
      desc:'Первичный осмотр, составление индивидуального плана лечения.',
      price:'Бесплатно',
      details:'На консультации врач проводит осмотр полости рта, собирает анамнез, оценивает состояние зубов и дёсен. По итогам составляется подробный план лечения с указанием всех необходимых процедур и ориентировочной стоимостью. Консультация бесплатная.',
    },
    {
      icon:'images/icons_for_services_03.gif', name:'Визиография (рентген)', cat:'diagnostics',
      desc:'Прицельный рентгеновский снимок зуба для точной диагностики.',
      price:'100 MDL / снимок',
      details:'Виziография — это цифровой прицельный рентгеновский снимок одного или нескольких зубов. Позволяет обнаружить кариес на контактных поверхностях, оценить состояние корней и периапикальных тканей, проконтролировать качество пломбирования каналов. Доза облучения минимальна — в 10 раз ниже, чем при обычном рентгене.',
    },
 
    /* ── ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ ── */
    {
      icon:'images/icons_for_services_04.gif', name:'Анестезия', cat:'therapy',
      desc:'Местная анестезия перед лечением — безболезненное введение препарата.',
      price:'100 MDL',
      details:'Мы применяем анестетики последнего поколения: лидокаин/ксилин и более эффективные ультракаин, убестизин, альфакаин. Инъекция делается очень тонкой иглой после нанесения аппликационной анестезии на слизистую, поэтому пациент практически не ощущает укол.',
    },
    {
      icon:'images/icons_for_services_05.gif', name:'Лечение кариеса', cat:'therapy',
      desc:'Современные пломбы химического и фотополимерного отверждения.',
      price:'700–900 MDL',
      details:'Кариес — разрушение твёрдых тканей зуба под действием бактерий. Лечение включает удаление поражённых тканей бором, обработку антисептиком и восстановление зуба пломбой. Мы используем:\n• Пломбы химического отверждения (Evocrol, Degufill, Charisma)\n• Фотополимерные пломбы (Herculite, Superlux, Filtek, Spectrum)\n• Восстановление при клиновидном дефекте и пришеечном кариесе\n• Изолирующую лечебную прокладку (ионосил, Life)',
    },
    {
      icon:'images/icons_for_services_06.gif', name:'Лечение пульпита', cat:'therapy',
      desc:'Эндодонтическое лечение при воспалении нерва зуба.',
      price:'600–700 MDL / 1 канал',
      details:'Пульпит — воспаление нерва (пульпы) зуба, сопровождающееся сильной болью. Лечение проводится в 1–2 посещения:\n• Наложение мышьяковистой или безмышьяковистой пасты с временной пломбой\n• Пломбировка канала пастой или пастой с гуттаперчевым штифтом\n• Реставрация зуба с металлическими штифтами фотополимером\n• Реставрация под коронку\nСтоимость указана за один корневой канал. После лечения пульпита устанавливается постоянная пломба (см. лечение кариеса).',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Лечение периодонтита', cat:'therapy',
      desc:'Лечение воспаления тканей вокруг корня зуба.',
      price:'700–900 MDL / 1 канал',
      details:'Периодонтит — хроническое или острое воспаление тканей у верхушки корня зуба. Без лечения приводит к потере зуба и распространению инфекции.\n• Вскрытие полости зуба и каналов\n• Распломбировка ранее леченного канала\n• Пломбировка канала пастой или гуттаперчевым штифтом\n• Реставрация зуба штифтами\nСтоимость указана за один канал.',
    },
    {
      icon:'👶', name:'Лечение молочных зубов', cat:'therapy',
      desc:'Бережное лечение кариеса и пульпита у детей.',
      price:'250–350 MDL',
      details:'Молочные зубы требуют такого же тщательного лечения, как постоянные — они удерживают место для постоянных зубов и влияют на развитие прикуса.\n• Кариес: цементные пломбы, химическое отверждение, фотополимер\n• Пульпит: мышьяковистая или безмышьяковистая паста\n• Запечатывание фиссур (герметизация) молочного зуба\n• Запечатывание фиссур постоянного зуба (до 12 лет)',
    },
 
    /* ── ПАРОДОНТОЛОГИЯ ── */
    {
      icon:'images/icons_for_services_09.gif', name:'Снятие зубных отложений', cat:'periodontology',
      desc:'Полное удаление зубного камня ультразвуком и инструментами.',
      price:'900–1000 MDL',
      details:'Зубной камень — затвердевший налёт на зубах и под дёснами, вызывающий воспаление дёсен (гингивит) и их опускание (пародонтит). Профессиональное снятие включает ручное удаление инструментами, ультразвук и пескоструйный аппарат Air Flow (удаление мягких отложений и пигментации). Рекомендуется проводить 1–2 раза в год.',
    },
    {
      icon:'images/icons_for_services_11.gif', name:'Снятие чувствительности зуба', cat:'periodontology',
      desc:'Устранение гиперестезии — боли от холодного, горячего, сладкого.',
      price:'200–300 MDL / зуб',
      details:'Гиперестезия (повышенная чувствительность) возникает при обнажении дентина — из-за пришеечного кариеса, рецессии дёсен, эрозии эмали или после отбеливания. Врач наносит специальные реминерализирующие и десенситивные препараты, которые закупоривают дентинные канальцы и снижают чувствительность.',
    },
 
    /* ── ХИРУРГИЯ ── */
    {
      icon:'images/icons_for_services_12.gif', name:'Типичное удаление зуба', cat:'surgery',
      desc:'Стандартное удаление зуба под местной анестезией.',
      price:'800–1200 MDL',
      details:'Типичное удаление проводится при кариесе, не поддающемся лечению, или по ортодонтическим показаниям. Зуб удаляется щипцами или элеваторами под местной анестезией. Процедура занимает 10–20 минут. После удаления при необходимости накладываются швы.',
    },
    {
      icon:'images/icons_for_services_13.gif', name:'Атипичное удаление зуба', cat:'surgery',
      desc:'Сложное удаление разрушенного или неправильно расположенного зуба.',
      price:'1200–1500 MDL',
      details:'Атипичное удаление требуется при сильно разрушенной коронке зуба, искривлённых корнях или неправильном положении зуба. Иногда используется распиловка корней или работа бором. Анестезия обязательна. Обычно накладываются швы.',
    },
    {
      icon:'images/icons_for_services_14.gif', name:'Удаление непрорезавшегося зуба', cat:'surgery',
      desc:'Хирургическое удаление ретинированного или дистопированного зуба.',
      price:'1200–1500 MDL',
      details:'Ретинированный зуб (чаще всего зуб мудрости) не прорезался и находится внутри кости или мягких тканей. Операция включает разрез десны, при необходимости — распиловку кости, разделение зуба на части, его извлечение и ушивание раны. Проводится под местной анестезией.',
    },
    {
      icon:'images/icons_for_services_15.gif', name:'Лечение воспалительных процессов (с удалением)', cat:'surgery',
      desc:'Лечение одонтогенных воспалений с удалением причинного зуба.',
      price:'600–800 MDL',
      details:'При периостите, абсцессе или флегмоне одонтогенного происхождения требуется удаление причинного зуба и дренирование очага воспаления. Лечение включает разрез и дренаж, при необходимости — назначение антибиотиков.',
    },
    {
      icon:'images/icons_for_services_17.gif', name:'Лечение перикоронарита', cat:'surgery',
      desc:'Иссечение воспалённого капюшона над прорезывающимся зубом мудрости.',
      price:'600–800 MDL',
      details:'Перикоронарит — воспаление мягких тканей (капюшона) вокруг прорезывающегося зуба мудрости. Врач промывает карман антисептиком и при необходимости иссекает нависающий капюшон скальпелем. Операция проводится под местной анестезией.',
    },
    {
      icon:'images/icons_for_services_18.gif', name:'Резекция верхушки корня', cat:'surgery',
      desc:'Хирургическое удаление верхушки корня при кисте или хроническом очаге воспаления.',
      price:'1000–1200 MDL',
      details:'Резекция верхушки корня — органосохраняющая операция, позволяющая сохранить зуб при наличии кисты или хронического периодонтита, не поддающегося консервативному лечению. Врач делает разрез десны, трепанирует кость, удаляет верхушку корня вместе с патологическими тканями и ретроградно пломбирует канал.',
    },
 
    /* ── ОРТОПЕДИЯ ── */
    {
      icon:'images/icons_for_services_19.gif', name:'Металлокерамическая коронка', cat:'orthopedics',
      desc:'Прочная и эстетичная коронка из металлического каркаса с керамическим покрытием.',
      price:'2000 MDL',
      details:'Металлокерамическая коронка — наиболее распространённый вид несъёмного протезирования. Металлический каркас обеспечивает прочность, керамическое покрытие — эстетику. Подходит для всех групп зубов. Срок службы — 10–15 лет. Предоплата при протезировании — 50%.',
    },
    {
      icon:'images/icons_for_services_20.gif', name:'Цельнолитная коронка с облицовкой', cat:'orthopedics',
      desc:'Литая металлическая коронка с пластмассовой облицовкой.',
      price:'1200–1400 MDL',
      details:'Цельнолитная коронка изготавливается методом литья из металлического сплава. Пластмассовая облицовка придаёт ей эстетичный вид со стороны губы/щеки. Менее эстетична по сравнению с металлокерамикой, но более доступна по цене. Рекомендуется для боковых зубов.',
    },
    {
      icon:'images/icons_for_services_21.gif', name:'Пластмассовая коронка', cat:'orthopedics',
      desc:'Временная или постоянная коронка из акриловой пластмассы.',
      price:'500–800 MDL',
      details:'Пластмассовая (акриловая) коронка используется как временная конструкция в период изготовления постоянной коронки или как постоянная при ограниченном бюджете. Менее прочная, со временем меняет цвет. Подходит для передних зубов временно.',
    },
    {
      icon:'images/icons_for_services_19.gif', name:'Коронка из оксида циркония', cat:'orthopedics',
      desc:'Безметалловая коронка из оксида циркония — прочная и эстетичная.',
      price:'3000 MDL',
      details:'Коронка из оксида циркония — безметалловая конструкция, сочетающая высокую прочность и естественный внешний вид. Изготавливается в зуботехнической лаборатории по слепкам.',
    },
    {
      icon:'images/icons_for_services_19.gif', name:'Коронка из циркония на имплант', cat:'orthopedics',
      desc:'Циркониевая коронка для восстановления зуба на имплантате.',
      price:'4400–4600 MDL',
      details:'Циркониевая коронка на имплант завершает имплантацию, восстанавливая внешний вид и функцию утраченного зуба. Безметалловая конструкция выглядит естественно. Изготавливается в зуботехнической лаборатории.',
    },
    {
      icon:'images/icons_for_services_22.gif', name:'Бюгельный протез', cat:'orthopedics',
      desc:'Съёмный металлический каркасный протез при частичном отсутствии зубов.',
      price:'7000 MDL',
      details:'Бюгельный протез — наиболее функциональный вид съёмного протезирования. Тонкий металлический каркас (кобальто-хромовый сплав) делает его лёгким и надёжным. Фиксируется на зубах кламмерами или аттачменами.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Съёмный протез', cat:'orthopedics',
      desc:'Полный или частичный пластинчатый протез из акрила.',
      price:'6000 MDL',
      details:'Съёмный акриловый протез — традиционный и доступный способ восстановить утраченные зубы. Полный протез замещает все зубы на челюсти, частичный — несколько отсутствующих зубов. Требует ежедневного ухода. Изготавливается в зуботехнической лаборатории по слепкам.',
    },
 
    /* ── ЭСТЕТИКА ── */
    {
      icon:'images/icons_for_services_30.gif', name:'Металлическая вкладка', cat:'aesthetics',
      desc:'Литая металлическая вкладка для восстановления разрушенного зуба.',
      price:'800 MDL',
      details:'Металлическая вкладка — непрямая реставрация, изготовленная в лаборатории. Применяется при значительном разрушении коронки зуба, когда пломба уже не держится. Точно повторяет форму полости, более долговечна, чем пломба.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Снятие коронки', cat:'aesthetics',
      desc:'Аккуратное снятие старой или неподходящей коронки.',
      price:'200 MDL / шт.',
      details:'Снятие коронки требуется при необходимости её замены, повторного эндодонтического лечения зуба или при неточности прилегания. Врач аккуратно распиливает или снимает коронку специальными инструментами, стараясь сохранить её целостность для возможной повторной фиксации.',
    },
    {
      icon:'images/icons_for_services_33.gif', name:'Слепок', cat:'aesthetics',
      desc:'Получение точного слепка зубов для изготовления протезов и коронок.',
      price:'300–400 MDL',
      details:'Слепок (оттиск) — точное отображение зубов и тканей полости рта для изготовления зубопротезных конструкций в лаборатории. Двухслойный слепок используется при изготовлении металлокерамических и безметалловых коронок для максимальной точности.',
    },
  ],
 
  ro:[
    /* ── DIAGNOSTIC ── */
    {
      icon:'images/icons_for_services_02.gif', name:'Consultație medic', cat:'diagnostics',
      desc:'Examinare inițială și elaborarea planului individual de tratament.',
      price:'Gratuit',
      details:'La consultație medicul examinează cavitatea bucală, colectează anamneza și evaluează starea dinților și gingiilor. Se elaborează un plan detaliat de tratament cu toate procedurile necesare și costul estimativ. Consultația este gratuită.',
    },
    {
      icon:'images/icons_for_services_03.gif', name:'Viziografie (radiografie)', cat:'diagnostics',
      desc:'Radiografie digitală țintită pentru diagnosticare precisă.',
      price:'100 MDL / imagine',
      details:'Viziografia este o radiografie digitală țintită a unuia sau mai multor dinți. Permite detectarea cariei pe suprafețele de contact, evaluarea stării rădăcinilor și țesuturilor periapicale, controlul calității obturației canalelor. Doza de radiație este minimă — de 10 ori mai mică decât la radiografia convențională.',
    },
 
    /* ── STOMATOLOGIE TERAPEUTICĂ ── */
    {
      icon:'images/icons_for_services_04.gif', name:'Anestezie', cat:'therapy',
      desc:'Anestezie locală înainte de tratament — injectare nedureroasă.',
      price:'100 MDL',
      details:'Utilizăm anestezice de ultimă generație: lidocaină/xilină și mai eficiente ultracaină, ubistezin, alfacaină. Injecția se face cu ac foarte subțire după aplicarea anesteziei topice pe mucoasă, astfel pacientul practic nu simte înțepătura.',
    },
    {
      icon:'images/icons_for_services_05.gif', name:'Tratarea cariei dentare', cat:'therapy',
      desc:'Plombe moderne chimice și fotopolimerizabile.',
      price:'700–900 MDL',
      details:'Caria — distrugerea țesuturilor dure ale dintelui sub acțiunea bacteriilor. Tratamentul include îndepărtarea țesuturilor afectate, tratament antiseptic și restaurarea dintelui cu plombă:\n• Plomba chimică (Evocrol, Degufill, Charisma)\n• Plomba fotopolimerizabilă (Herculite, Superlux, Filtek, Spectrum)\n• Restaurare la defect cuneiform și carie cervicală\n• Căptușeală curativă izolatoare (ionosil, Life)',
    },
    {
      icon:'images/icons_for_services_06.gif', name:'Tratarea pulpitei', cat:'therapy',
      desc:'Tratament endodontic la inflamarea nervului dintelui.',
      price:'600–700 MDL / 1 canal',
      details:'Pulpita — inflamarea nervului (pulpei) dintelui, însoțită de dureri intense. Tratamentul se efectuează în 1–2 vizite:\n• Pastă arsenicală sau fără arseniu cu plombă temporară\n• Obturarea canalului cu pastă sau cu pastă și con de gutapercă\n• Restaurarea dintelui cu știfturi metalice cu fotopolimer\n• Restaurare sub coroană\nPrețul este indicat pentru un canal radicular.',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Tratarea periodontitei', cat:'therapy',
      desc:'Tratamentul inflamației țesuturilor din jurul rădăcinii dintelui.',
      price:'700–900 MDL / 1 canal',
      details:'Periodontita — inflamație cronică sau acută a țesuturilor la vârful rădăcinii dintelui. Fără tratament duce la pierderea dintelui:\n• Deschiderea camerei pulpare și canalelor\n• Dezobturarea unui canal anterior tratat\n• Obturarea canalului cu pastă sau gutapercă\n• Restaurarea dintelui cu știfturi\nPrețul este indicat pentru un canal.',
    },
    {
      icon:'👶', name:'Tratarea dinților temporari', cat:'therapy',
      desc:'Tratament atent al cariei și pulpitei la copii.',
      price:'250–350 MDL',
      details:'Dinții de lapte necesită același tratament atent ca cei permanenți:\n• Carie: plombe de ciment, polimerizare chimică, fotopolimer\n• Pulpită: pastă arsenicală sau fără arseniu\n• Ermetizarea fisurilor dinte de lapte\n• Ermetizarea fisurilor dinte permanent (până la 12 ani)',
    },
 
    /* ── PARODONTOLOGIE ── */
    {
      icon:'images/icons_for_services_09.gif', name:'Detartraj total', cat:'periodontology',
      desc:'Îndepărtarea completă a tartralui cu ultrasunete și instrumente.',
      price:'900–1000 MDL',
      details:'Tartrul — depuneri mineralizate pe dinți și sub gingii care provoacă inflamații gingivale. Detartrajul profesional include îndepărtarea manuală cu instrumente, ultrasunete și aparat piesă-aer (Air Flow). Se recomandă de 1–2 ori pe an.',
    },
    {
      icon:'images/icons_for_services_11.gif', name:'Înlăturarea hipersensibilității dentare', cat:'periodontology',
      desc:'Eliminarea durerii la rece, cald, dulce.',
      price:'200–300 MDL / dinte',
      details:'Hiperestezia apare la expunerea dentinei — din cauza cariei cervicale, recesiei gingivale sau eroziunii emailului. Medicul aplică preparate remineralizante și desensitizante care sigilează canaliculele dentinare și reduc sensibilitatea.',
    },
 
    /* ── CHIRURGIE ── */
    {
      icon:'images/icons_for_services_12.gif', name:'Extracție tipică', cat:'surgery',
      desc:'Extracție standard sub anestezie locală.',
      price:'800–1200 MDL',
      details:'Extracția tipică se efectuează când dintele nu poate fi tratat. Se folosesc clești sau elevatoare sub anestezie locală. Procedura durează 10–20 minute.',
    },
    {
      icon:'images/icons_for_services_13.gif', name:'Extracție atipică', cat:'surgery',
      desc:'Extracție complexă a unui dinte distrus sau malpoziționat.',
      price:'1200–1500 MDL',
      details:'Extracția atipică este necesară la coroane sever distruse sau rădăcini curbe. Uneori se folosește secționarea rădăcinilor sau freza. Anestezia este obligatorie. De obicei se aplică suturi.',
    },
    {
      icon:'images/icons_for_services_14.gif', name:'Extracția dintelui neproerupat', cat:'surgery',
      desc:'Extracție chirurgicală a dintelui retenționat sau distopit.',
      price:'1200–1500 MDL',
      details:'Dintele retenționat (de obicei măseaua de minte) nu a erupt și se află în os. Operația include incizia gingiei, rezecția osului dacă e necesar, extracția dintelui și suturarea plăgii. Se efectuează sub anestezie locală.',
    },
    {
      icon:'images/icons_for_services_15.gif', name:'Tratarea proceselor inflamatorii (cu extracție)', cat:'surgery',
      desc:'Tratamentul inflamațiilor odontogene cu extracția dintelui cauzal.',
      price:'600–800 MDL',
      details:'La periostită, abces sau flegmon odontogen se impune extracția dintelui cauzal și drenarea focarului. Tratamentul include incizie și drenaj, la necesitate — antibiotice.',
    },
    {
      icon:'images/icons_for_services_17.gif', name:'Tratarea pericoronaritei', cat:'surgery',
      desc:'Excizia capișonului inflamat deasupra molarului de minte care erupe.',
      price:'600–800 MDL',
      details:'Pericoronarita — inflamația țesuturilor moi din jurul molarului de minte care erupe. Medicul spală punga cu antiseptic și la necesitate excizează capișonul cu bisturiul. Operația se efectuează sub anestezie locală.',
    },
    {
      icon:'images/icons_for_services_18.gif', name:'Rezecția apicală', cat:'surgery',
      desc:'Îndepărtarea chirurgicală a vârfului rădăcinii la chist sau inflamație cronică.',
      price:'1000–1200 MDL',
      details:'Rezecția apicală — operație organosalvatoare care permite păstrarea dintelui în prezența unui chist sau periodontită cronică. Medicul face incizie gingivală, trepanează osul, îndepărtează vârful rădăcinii cu țesuturile patologice și obturează canalul retrograd.',
    },
 
    /* ── ORTOPEDIE ── */
    {
      icon:'images/icons_for_services_19.gif', name:'Coroană metalo-ceramică', cat:'orthopedics',
      desc:'Coroană rezistentă și estetică pe schelet metalic cu acoperire ceramică.',
      price:'2000 MDL',
      details:'Coroana metalo-ceramică — cel mai răspândit tip de proteză fixă. Scheletul metalic asigură rezistența, acoperirea ceramică — estetica. Se aplică pe toți dinții. Durată de viață: 10–15 ani. Avans la protezare — 50%.',
    },
    {
      icon:'images/icons_for_services_20.gif', name:'Coroană turnată cu fatetă', cat:'orthopedics',
      desc:'Coroană metalică turnată cu fatetă din plastic.',
      price:'1200–1400 MDL',
      details:'Coroana turnată se fabrică prin turnare din aliaj metalic. Fateta din plastic îi conferă aspect estetic dinspre buze/obraji. Mai puțin estetică decât metalo-ceramica, dar mai accesibilă ca preț. Recomandată pentru dinții laterali.',
    },
    {
      icon:'images/icons_for_services_21.gif', name:'Coroană acrilică', cat:'orthopedics',
      desc:'Coroană temporară sau permanentă din plastic acrilic.',
      price:'500–800 MDL',
      details:'Coroana acrilică se utilizează ca o construcție temporară în perioada confecționării coroanei permanente sau ca permanentă la buget limitat. Mai puțin rezistentă, cu timpul își schimbă culoarea.',
    },
    {
      icon:'images/icons_for_services_19.gif', name:'Coroană din oxid de zirconiu', cat:'orthopedics',
      desc:'Coroană fără metal din oxid de zirconiu — rezistentă și estetică.',
      price:'3000 MDL',
      details:'Coroana din oxid de zirconiu — construcție fără metal, care îmbină rezistența ridicată cu aspectul natural. Se confecționează în laboratorul de tehnică dentară după amprentă.',
    },
    {
      icon:'images/icons_for_services_19.gif', name:'Coroană din zirconiu pe implant', cat:'orthopedics',
      desc:'Coroană din zirconiu pentru restaurarea dintelui pe implant.',
      price:'4400–4600 MDL',
      details:'Coroana din zirconiu pe implant încheie procesul de implantare, restabilind aspectul și funcția dintelui pierdut. Construcția fără metal arată natural. Se confecționează în laboratorul de tehnică dentară.',
    },
    {
      icon:'images/icons_for_services_22.gif', name:'Proteză scheletară (bügel)', cat:'orthopedics',
      desc:'Proteză mobilă cu schelet metalic la absența parțială a dinților.',
      price:'7000 MDL',
      details:'Proteza bügel — cel mai funcțional tip de proteză mobilă. Scheletul subțire din aliaj cobalt-crom o face ușoară și fiabilă. Se fixează pe dinți cu croșete sau atașamente.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Proteză mobilă', cat:'orthopedics',
      desc:'Proteză laminară totală sau parțială din acrilic.',
      price:'6000 MDL',
      details:'Proteza acrilică mobilă — metoda tradițională și accesibilă de restaurare a dinților. Proteza totală înlocuiește toți dinții de pe maxilar, parțiala — câțiva dinți absenți. Necesită îngrijire zilnică.',
    },
 
    /* ── ESTETICĂ ── */
    {
      icon:'images/icons_for_services_30.gif', name:'Incrustație metalică', cat:'aesthetics',
      desc:'Incrustație metalică turnată pentru restaurarea dintelui distrus.',
      price:'800 MDL',
      details:'Incrustația metalică — restaurare indirectă fabricată în laborator. Se utilizează la distrugerea semnificativă a coroanei dintelui când plomba nu mai rezistă. Reproduce exact forma cavității, mai durabilă decât plomba.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Îndepărtarea coroanei', cat:'aesthetics',
      desc:'Îndepărtarea atentă a coroanei vechi sau nepotrivite.',
      price:'200 MDL / buc.',
      details:'Îndepărtarea coroanei este necesară la înlocuire, retratament endodontic sau inadaptare marginală. Medicul secționează sau îndepărtează coroana cu instrumente speciale, încercând să o păstreze pentru refixare.',
    },
    {
      icon:'images/icons_for_services_33.gif', name:'Amprentă', cat:'aesthetics',
      desc:'Obținerea amprentei precise pentru confecționarea protezelor și coroanelor.',
      price:'300–400 MDL',
      details:'Amprenta — reproducerea exactă a dinților și țesuturilor cavității bucale pentru confecționarea construcțiilor protetice în laborator. Amprenta dublă se folosește la coroane metalo-ceramice și fără metal pentru precizie maximă.',
    },
  ],
 
  en:[
    /* ── DIAGNOSTICS ── */
    {
      icon:'images/icons_for_services_02.gif', name:'Doctor Consultation', cat:'diagnostics',
      desc:'Initial examination and individual treatment plan preparation.',
      price:'Free',
      details:'At the consultation the dentist examines the oral cavity, takes a history and evaluates the condition of teeth and gums. A detailed treatment plan is drawn up listing all necessary procedures and estimated costs. The consultation is free of charge.',
    },
    {
      icon:'images/icons_for_services_03.gif', name:'Viziography (X-ray)', cat:'diagnostics',
      desc:'Targeted digital X-ray of a tooth for accurate diagnosis.',
      price:'100 MDL / image',
      details:'Viziography is a targeted digital X-ray of one or more teeth. It detects cavities on contact surfaces, evaluates root and periapical tissue condition, and monitors canal filling quality. Radiation dose is minimal — 10× lower than conventional X-ray.',
    },
 
    /* ── THERAPEUTIC DENTISTRY ── */
    {
      icon:'images/icons_for_services_04.gif', name:'Anaesthesia', cat:'therapy',
      desc:'Local anaesthesia before treatment — painless injection.',
      price:'100 MDL',
      details:'We use next-generation anaesthetics: lidocaine/xylocaine and more effective ultracaine, ubestizin, alfacaine. The injection is given with a very fine needle after applying topical anaesthetic to the mucosa, so the patient barely feels the injection.',
    },
    {
      icon:'images/icons_for_services_05.gif', name:'Cavity Treatment', cat:'therapy',
      desc:'Modern chemical-cure and light-cure fillings.',
      price:'700–900 MDL',
      details:'Dental caries — destruction of tooth hard tissues by bacteria. Treatment includes removing decayed tissue, antiseptic treatment and restoring the tooth with a filling:\n• Chemical-cure fillings (Evocrol, Degufill, Charisma)\n• Light-cure fillings (Herculite, Superlux, Filtek, Spectrum)\n• Restoration of wedge-shaped defects and cervical caries\n• Insulating therapeutic liner (ionosil, Life)',
    },
    {
      icon:'images/icons_for_services_06.gif', name:'Pulpitis Treatment', cat:'therapy',
      desc:'Endodontic treatment for tooth nerve inflammation.',
      price:'600–700 MDL / 1 canal',
      details:'Pulpitis — inflammation of the tooth nerve (pulp), accompanied by severe pain. Treatment is carried out in 1–2 visits:\n• Arsenic or arsenic-free paste with temporary filling\n• Filling the canal with paste, or with paste and gutta-percha point\n• Restoring tooth with metal pins with composite\n• Restoration for crown\nThe price is quoted per one root canal.',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Periodontitis Treatment', cat:'therapy',
      desc:'Treatment of inflammation of tissues around the tooth root.',
      price:'700–900 MDL / 1 canal',
      details:'Periodontitis — chronic or acute inflammation of tissues at the root apex. Without treatment leads to tooth loss:\n• Opening the pulp chamber and canals\n• Removing previous filling from a canal\n• Filling the canal with paste or gutta-percha\n• Tooth restoration with pins\nThe price is quoted per one canal.',
    },
    {
      icon:'👶', name:'Baby Teeth Treatment', cat:'therapy',
      desc:'Gentle treatment of cavities and pulpitis in children.',
      price:'250–350 MDL',
      details:'Milk teeth require equally careful treatment as permanent teeth:\n• Caries: cement fillings, chemical cure, light-cure\n• Pulpitis: arsenic or arsenic-free paste\n• Fissure sealant on milk tooth\n• Fissure sealant on permanent tooth (under 12)',
    },
 
    /* ── PERIODONTOLOGY ── */
    {
      icon:'images/icons_for_services_09.gif', name:'Full Tartar Removal', cat:'periodontology',
      desc:'Complete removal of tartar with ultrasound and instruments.',
      price:'900–1000 MDL',
      details:'Dental calculus — hardened plaque on teeth and under gums causing gum inflammation. Professional cleaning includes manual removal with instruments, ultrasound and the Air Flow device. Recommended 1–2 times per year.',
    },
    {
      icon:'images/icons_for_services_11.gif', name:'Tooth Sensitivity Reduction', cat:'periodontology',
      desc:'Elimination of hypersensitivity — pain from cold, hot, sweet.',
      price:'200–300 MDL / tooth',
      details:'Hypersensitivity occurs when dentine is exposed due to cervical caries, gum recession or enamel erosion. The dentist applies remineralising and desensitising agents that seal the dentinal tubules and reduce sensitivity.',
    },
 
    /* ── SURGERY ── */
    {
      icon:'images/icons_for_services_12.gif', name:'Standard Tooth Extraction', cat:'surgery',
      desc:'Standard tooth removal under local anaesthesia.',
      price:'800–1200 MDL',
      details:'Standard extraction is performed when a tooth cannot be treated. Forceps or elevators are used under local anaesthesia. The procedure takes 10–20 minutes.',
    },
    {
      icon:'images/icons_for_services_13.gif', name:'Atypical Tooth Extraction', cat:'surgery',
      desc:'Complex removal of a severely broken or malpositioned tooth.',
      price:'1200–1500 MDL',
      details:'Atypical extraction is required for severely broken crowns or curved roots. Root sectioning or a drill may be used. Anaesthesia is mandatory. Stitches are usually applied.',
    },
    {
      icon:'images/icons_for_services_14.gif', name:'Impacted Tooth Removal', cat:'surgery',
      desc:'Surgical removal of an impacted or dystopic tooth.',
      price:'1200–1500 MDL',
      details:'An impacted tooth (usually a wisdom tooth) has not erupted and lies within the bone. The operation includes incising the gum, resecting bone if needed, extracting the tooth and suturing the wound. Performed under local anaesthesia.',
    },
    {
      icon:'images/icons_for_services_15.gif', name:'Treatment of Odontogenic Inflammation (with extraction)', cat:'surgery',
      desc:'Treatment of odontogenic inflammatory processes with extraction of the causative tooth.',
      price:'600–800 MDL',
      details:'In periostitis, abscess or phlegmon of odontogenic origin, removal of the causative tooth and drainage of the inflammatory focus is required. Treatment includes incision and drainage, and antibiotics if necessary.',
    },
    {
      icon:'images/icons_for_services_17.gif', name:'Pericoronitis Treatment', cat:'surgery',
      desc:'Excision of the inflamed hood over an erupting wisdom tooth.',
      price:'600–800 MDL',
      details:'Pericoronitis — inflammation of the soft tissues (hood) around an erupting wisdom tooth. The dentist flushes the pocket with antiseptic and if necessary excises the overhanging hood with a scalpel. Performed under local anaesthesia.',
    },
    {
      icon:'images/icons_for_services_18.gif', name:'Root Apex Resection', cat:'surgery',
      desc:'Surgical removal of the root apex at a cyst or chronic inflammatory focus.',
      price:'1000–1200 MDL',
      details:'Root apex resection — a tooth-preserving operation that allows keeping the tooth with a cyst or chronic periodontitis. The dentist makes a gingival incision, trepanates the bone, removes the root apex with pathological tissues and retrogradely fills the canal.',
    },
 
    /* ── ORTHOPEDICS ── */
    {
      icon:'images/icons_for_services_19.gif', name:'Metal-Ceramic Crown', cat:'orthopedics',
      desc:'Strong and aesthetic crown with metal framework and ceramic coating.',
      price:'2000 MDL',
      details:'Metal-ceramic crown — the most common type of fixed prosthesis. The metal framework provides strength, the ceramic coating provides aesthetics. Suitable for all teeth groups. Service life: 10–15 years. 50% advance payment required.',
    },
    {
      icon:'images/icons_for_services_20.gif', name:'Cast Crown with Plastic Veneer', cat:'orthopedics',
      desc:'Cast metal crown with plastic facing.',
      price:'1200–1400 MDL',
      details:'The cast crown is made by casting from a metal alloy. The plastic veneer gives it an aesthetic appearance on the lip/cheek side. Less aesthetic than metal-ceramic but more affordable. Recommended for posterior teeth.',
    },
    {
      icon:'images/icons_for_services_21.gif', name:'Acrylic Crown', cat:'orthopedics',
      desc:'Temporary or permanent crown made of acrylic plastic.',
      price:'500–800 MDL',
      details:'An acrylic crown is used as a temporary construction while a permanent crown is being made, or as a permanent one on a limited budget. Less durable, changes colour over time.',
    },
    {
      icon:'images/icons_for_services_19.gif', name:'Zirconia Crown', cat:'orthopedics',
      desc:'Metal-free zirconium oxide crown — strong and aesthetic.',
      price:'3000 MDL',
      details:'A zirconia crown is a metal-free restoration combining high strength with a natural appearance. It is made in the dental laboratory from an impression.',
    },
    {
      icon:'images/icons_for_services_19.gif', name:'Zirconia Crown on Implant', cat:'orthopedics',
      desc:'Zirconia crown for restoring a tooth on a dental implant.',
      price:'4400–4600 MDL',
      details:'A zirconia crown on an implant completes the implant treatment, restoring the appearance and function of the lost tooth. The metal-free construction looks natural. It is made in the dental laboratory.',
    },
    {
      icon:'images/icons_for_services_22.gif', name:'Skeletal (Clasp) Denture', cat:'orthopedics',
      desc:'Removable metal framework denture for partial tooth loss.',
      price:'7000 MDL',
      details:'The clasp denture is the most functional type of removable prosthesis. The thin cobalt-chromium alloy framework makes it light and reliable. It is fixed to the teeth with clasps or attachments.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Removable Denture', cat:'orthopedics',
      desc:'Full or partial acrylic plate denture.',
      price:'6000 MDL',
      details:'Acrylic removable denture — a traditional and affordable way to replace missing teeth. A complete denture replaces all teeth on a jaw, a partial denture replaces several missing teeth. Requires daily care.',
    },
 
    /* ── AESTHETICS ── */
    {
      icon:'images/icons_for_services_30.gif', name:'Metal Inlay', cat:'aesthetics',
      desc:'Cast metal inlay for restoring a broken-down tooth.',
      price:'800 MDL',
      details:'A metal inlay is an indirect restoration made in the laboratory. Used when significant crown destruction makes filling unreliable. It precisely replicates the cavity shape and is more durable than a filling.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Crown Removal', cat:'aesthetics',
      desc:'Careful removal of an old or ill-fitting crown.',
      price:'200 MDL / pc.',
      details:'Crown removal is needed for replacement, retreatment or marginal discrepancy. The dentist carefully sections or removes the crown with special instruments, trying to preserve it for possible refixation.',
    },
    {
      icon:'images/icons_for_services_33.gif', name:'Impression', cat:'aesthetics',
      desc:'Taking a precise impression for making dentures and crowns.',
      price:'300–400 MDL',
      details:'An impression is an exact reproduction of the teeth and oral tissues for making prosthetic constructions in the laboratory. A double-layer impression is used for metal-ceramic and metal-free crowns for maximum precision.',
    },
  ]
};
/* ── CATEGORIES CONFIG (no "all" tab) ───────────── */
const TAB_KEYS = ['diagnostics','therapy','periodontology','surgery','orthopedics','aesthetics'];
const TAB_ICONS = {
  diagnostics:'🔍',
  therapy:'🦷',
  periodontology:'👄',
  surgery:'✂️',
  orthopedics:'👑',
  aesthetics:'✨'
};
const TAB_I18N = {
  diagnostics:'svc_diagnostics',
  therapy:'svc_therapy',
  periodontology:'svc_periodontology',
  surgery:'svc_surgery',
  orthopedics:'svc_orthopedics',
  aesthetics:'svc_aesthetics'
};
const TAB_DESC_I18N = {
  diagnostics:'svc_cat_desc_diagnostics',
  therapy:'svc_cat_desc_therapy',
  periodontology:'svc_cat_desc_periodontology',
  surgery:'svc_cat_desc_surgery',
  orthopedics:'svc_cat_desc_orthopedics',
  aesthetics:'svc_cat_desc_aesthetics'
};

let activeTab = 'diagnostics';

/* ── ICON HELPER ─────────────────────────────────────
   Если icon — путь к файлу (содержит . или /),
   рендерит <img>. Иначе — эмодзи текстом.
──────────────────────────────────────────────────── */
function renderIcon(icon) {
  if (icon && (icon.includes('/') || icon.includes('\\') || /\.\w{2,4}$/.test(icon))) {
    return `<img src="${icon}" class="svc-icon-img" alt="">`;
  }
  return icon;
}

function countByTab(key, services){
  return services.filter(s => s.cat === key).length;
}

function rebuildServices(){
  const t = LANGS[currentLang];
  const services = SERVICES_DATA[currentLang];

  // rebuild tabs
  const tabsEl = document.getElementById('svcTabs');
  tabsEl.innerHTML = '';
  TAB_KEYS.forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'svc-tab' + (key === activeTab ? ' active' : '');
    btn.dataset.tab = key;
    const cnt = countByTab(key, services);
    btn.innerHTML = `<span class="tab-icon">${TAB_ICONS[key]}</span>${t[TAB_I18N[key]]}<span class="tab-count">${cnt}</span>`;
    btn.onclick = () => filterServices(key);
    tabsEl.appendChild(btn);
  });

  // rebuild cards
  const grid = document.getElementById('svcGrid');
  grid.innerHTML = '';

  // Show category description banner
  const catDesc = document.createElement('div');
  catDesc.className = 'svc-cat-banner';
  catDesc.innerHTML = `<span class="svc-cat-icon">${TAB_ICONS[activeTab]}</span>
    <div>
      <strong>${t[TAB_I18N[activeTab]]}</strong>
      <span>${t[TAB_DESC_I18N[activeTab]]}</span>
    </div>`;
  grid.appendChild(catDesc);

  // Render cards for active tab
  services.forEach((s, i) => {
    if (s.cat !== activeTab) return;
    const d = `d${(i % 4) + 1}`;
    const card = document.createElement('div');
    card.className = `svc-card rv ${d}`;
    card.dataset.cat = s.cat;
    card.innerHTML = `
      <div class="svc-icon">${renderIcon(s.icon)}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="svc-foot">
        <div class="svc-price">${s.price}</div>
        <div class="svc-arr">→</div>
      </div>`;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openServiceDetail(s, i));
    grid.appendChild(card);
  });

  // re-observe new cards
  document.querySelectorAll('.svc-card').forEach(el => rvObs.observe(el));
}

/* ── FILTER LOGIC ────────────────────────────── */
function filterServices(key){
  activeTab = key;
  rebuildServices();
}

/* ── SERVICE DETAIL MODAL ───────────────────── */
function openServiceDetail(s, idx){
  currentServiceIndex = (typeof idx === 'number') ? idx : currentServiceIndex;
  const t = LANGS[currentLang];
  const modal = document.getElementById('serviceDetailModal');
  document.getElementById('sdIcon').innerHTML = renderIcon(s.icon);
  document.getElementById('sdName').textContent = s.name;
  document.getElementById('sdDesc').textContent = s.desc;
  document.getElementById('sdPrice').textContent = s.price;
  document.getElementById('sdPriceLabel').textContent = t.svc_details_price;
  // Convert newlines to <br> for details
  document.getElementById('sdDetails').innerHTML = s.details.replace(/\n/g, '<br>');
  document.getElementById('sdBookBtn').textContent = t.svc_details_book;
  document.getElementById('sdCloseBtn').textContent = t.svc_details_close;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeServiceDetail(){
  document.getElementById('serviceDetailModal').classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ── NAV SCROLL ────────────────────────────────── */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));

/* ── MOBILE MENU ───────────────────────────────── */
function toggleMenu(){ document.getElementById('mobileMenu').classList.toggle('open'); }

/* ── SCROLL REVEAL ──────────────────────────────── */
const rvObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => rvObs.observe(el));
rebuildServices();

/* ── COUNTERS ───────────────────────────────────── */
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target, tgt = +el.dataset.target;
    let cur = 0; const step = tgt / 55;
    const t = setInterval(() => {
      cur += step;
      if(cur >= tgt){ el.textContent = tgt; clearInterval(t); }
      else el.textContent = Math.floor(cur);
    }, 22);
    cntObs.unobserve(el);
  });
}, { threshold: .5 });
document.querySelectorAll('[data-target]').forEach(c => cntObs.observe(c));

/* ── SERVICE MODAL OVERLAY / ESCAPE ─────────────── */
function handleOverlayClick(e){
  if(e.target === document.getElementById('serviceDetailModal')) closeServiceDetail();
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeServiceDetail(); }
});

/* ── BOOKING SECTION: JUMP FROM A SERVICE CARD ──── */
function bookFromService(){
  closeServiceDetail();
  const el = document.getElementById('booking');
  if(el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── CONTACT / SEND VIA CHANNEL ──────────────────── */
const CONTACT = {
  phoneDigits: '37369822287',   // WhatsApp / Viber / Telegram / Call — same number
  phoneDisplay: '+37369822287',
  email: 'scerbatiuc@gmail.com'
};

function sendVia(type){
  const t = LANGS[currentLang];
  const name    = document.getElementById('fName').value.trim();
  const phone   = document.getElementById('fPhone').value.trim();
  const message = document.getElementById('fMessage').value.trim();

  if(type !== 'call' && (!name || !phone)){
    alert(t.form_alert_name_phone);
    return;
  }

  const lines = [`${t.cc_msg_name}: ${name}`, `${t.cc_msg_phone}: ${phone}`];
  if(message) lines.push(`${t.cc_msg_msg}: ${message}`);
  const text = lines.join('\n');
  const enc  = encodeURIComponent(text);

  switch(type){
    case 'whatsapp':
      window.open(`https://wa.me/${CONTACT.phoneDigits}?text=${enc}`, '_blank');
      break;
    case 'viber':
      window.location.href = `viber://chat?number=%2B${CONTACT.phoneDigits}`;
      break;
    case 'telegram':
      window.open(`https://t.me/+${CONTACT.phoneDigits}`, '_blank');
      break;
    case 'call':
      window.location.href = `tel:+${CONTACT.phoneDigits}`;
      break;
    case 'email':
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t.cc_email_subject)}&body=${enc}`;
      break;
  }
}
