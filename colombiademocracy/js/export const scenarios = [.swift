export const scenarios = [
    [
        {
            scenario: "You have been elected president of Colombia. As a middle-of-the-road candidate, you appealed to both left- and right-wing voters. Many saw you as the candidate capable of uniting the country. From now on, every decision you make will influence voters’ perceptions (see table). Be aware! Alienating a part of the populace will lead to political radicalization. Radical leftists might group together in a revolutionary guerilla movement aiming to topple the government, while the radical right often rises within the military ranks and can depose you through a military coup. Will you be able to save the Colombian democracy from these threats?",
            options: [
                { option: "Of course!", left: 0, right: 0, result: "" },
                { option: "I am ready!", left: 0, right: 0, result: "" },
                { option: "Most definitely!", left: 0, right: 0, result: "" }
            ]
        },
        {
            scenario: "FIRST PRESS CONFERENCE\nDuring your first press conference as president of Colombia, you are asked about the country's economic situation. Several pressing issues are highlighted: 1. Colombia is one of the most unequal countries in the world. While a small minority holds most of the wealth, about 30% of people live below the poverty line. 2. Colombia has one of the highest corporate (business) tax rates in the world, deterring foreign investment and hampering economic development. Which issue will you prioritize?",
            options: [
                { option: "Redistribute money to the poor", left: +5, right: -5, socioeconomic: +5, result: "You are a leader of the common people, praised for addressing inequality. However, critics warn that this redistribution could deter investment and slow economic growth further." },
                { option: "Lower corporate taxes", left: -5, right: +5, socioeconomic: -5, result: "You are seen as pro-business, encouraging foreign investment and economic development. Yet, you face backlash for prioritizing corporations over the poor, potentially increasing inequality." },
                { option: "Promise economic prosperity", left: 0, right: 0, result: "The people have heard many empty promises in the past. They want to see concrete action and results rather than vague assurances." }
            ]
        },
        {
            scenario: "FIRST PRESS CONFERENCE\nDuring your first press conference as president of Colombia, you are asked about the country's political situation. Several pressing issues are highlighted: 1. Corruption in government remains a major problem, with $92.77 billion of government expenditure compromised in corruption cases between 2016 and 2020. 2. Colombia is heavily affected by criminality and violence. Violent crime, such as homicide, assault, and armed robbery, is widespread, along with organized criminal activities like extortion, robbery, and kidnapping. What will be your priority?",
            options: [
                { option: "Tackle financial corruption in government", left: +5, right: +5, result: "Your commitment to fighting corruption earns you praise from all sides, significantly boosting your political legitimacy." },
                { option: "Lower crime rates with more police and harsher punishments for criminals", left: -5, right: +5, political: -5, result: "Your tough stance on crime is applauded by those seeking safety, but criticized for potentially increasing human rights abuses." },
                { option: "Lower crime rates through preventive measures such as better social care", left: +5, right: -5, political: +5, result: "Your focus on prevention and social care is praised for addressing root causes of crime, but some see it as too lenient and ineffective." }
            ]
        },
        {
            scenario: "FIRST PRESS CONFERENCE\nDuring your first press conference as president of Colombia, you are asked about the country's cultural future. Several pressing issues are highlighted: Some people worry that Colombia’s traditional values are at stake. Others are concerned about the treatment of the LGBTQ community. What will you do?",
            options: [
                { option: "Uphold traditional values", left: -5, right: +5, cultural: -5, result: "You are seen as a defender of tradition, gaining support from conservative groups, but you face criticism for not advancing equal rights for all citizens." },
                { option: "Protect the rights of the LGBTQ community", left: +5, right: -5, cultural: +5, result: "Your progressive stance on LGBTQ rights garners support from human rights advocates, but faces resistance from conservative groups who fear a departure from traditional values." },
                { option: "Promise to be the president of all Colombians", left: 0, right: 0, result: "While your aim to be inclusive is commendable, people want to see concrete actions rather than just promises." }
            ]
        },
        {
            scenario: "CORRUPTION SCANDAL\nAn international scandal has erupted. One of the largest construction companies in Latin America has been found paying millions in bribes to public officials to secure public construction contracts. Several officials within your Ministry of Transportation are implicated. How do you respond?",
            options: [
                { option: "Start an immediate investigation and arrest the guilty", left: +5, right: +5, result: "Your decisive action against corruption boosts your credibility and political legitimacy, showing your commitment to justice and transparency." },
                { option: "Avoid the question and claim that nothing of the sort has happened", left: -5, right: -5, result: "Your evasiveness damages your reputation and erodes public trust, making it seem like you are protecting the corrupt." },
                { option: "Promise that your administration will do everything to prevent corruption", left: 0, right: 0, result: "People are skeptical of your promises without seeing immediate and concrete actions, fearing that this may just be another empty assurance." }
            ]
        },
        {
            scenario: "HEALTHCARE CRISIS\nOne of the biggest healthcare providers in the country has announced its intention to withdraw from the public healthcare system, claiming insufficient government funding. The company wants to continue as a private healthcare provider. How do you respond?",
            options: [
                { option: "Promise to dissolve the current insurance providers and nationalize the system", left: +5, right: -5, socioeconomic: +5, result: "You are praised for ensuring healthcare for all, but face criticism for potential inefficiencies and the high cost of nationalizing the system." },
                { option: "Allow the company to withdraw and become a private healthcare provider", left: -5, right: +5, socioeconomic: -5, result: "Your decision supports free market principles, potentially increasing efficiency and innovation, but could reduce access to healthcare for the poor." },
                { option: "Force the company to remain within the public system and promise more funding in the future", left: 0, right: 0, result: "You are seen as taking a balanced approach, but both sides have reservations about your long-term commitment and the practicality of your promise." }
            ]
        },
        {
            scenario: "EDUCATION\nDuring a press conference, you are asked about a recent report on illiteracy. The report shows that in five departments (La Guajira, Chocó, Vichada, Sucre, and Córdoba), at least 1 in 5 people cannot read or write. What will your administration do to improve education in Colombia?",
            options: [
                { option: "Increase funding for public education", left: +5, right: -5, socioeconomic: +5, result: "Your commitment to public education is applauded, but some worry about the financial burden and potential inefficiencies in the system." },
                { option: "Privatize parts of the education system", left: -5, right: +5, socioeconomic: -5, result: "Your move to privatize education is seen as a way to increase efficiency and innovation, but faces backlash for potentially increasing inequality." },
                { option: "Maintain current education funding levels", left: 0, right: 0, result: "People are disappointed by your lack of action to address the pressing issue of illiteracy, seeing it as a missed opportunity to improve education." }
            ]
        },
        {
            scenario: "ABORTION LAW\nA recent court ruling has contradicted the latest abortion law passed by Congress, stating that the General System of Social Security in Health \"does not have an obligation\" to perform an abortion before week 24. This ruling implies that healthcare providers can choose to deny abortion requests. What is your cabinet's position on abortion rights?",
            options: [
                { option: "Argue that your government will take this as an opportunity to reverse the abortion law to protect unborn babies", left: -5, right: +5, cultural: -5, result: "You gain support from pro-life advocates, bolstering your stance on traditional values, but face strong opposition from women's rights groups." },
                { option: "Argue that your government will take this as an opportunity to strengthen the abortion law to protect the rights of women", left: +5, right: -5, cultural: +5, result: "Your stance on women's rights is praised by progressives, but conservative groups strongly oppose any move to expand abortion rights." },
                { option: "Argue that the law can indeed be interpreted in different ways but is not in need of revision", left: 0, right: 0, result: "Your neutral stance is seen as avoiding the issue, leading to dissatisfaction from both sides who want clear and decisive action." }
            ]
        },
        {
            scenario: "LAND REFORM\nDuring a meeting with the peasant organization Via Campesina, you are asked what you will do to improve access to land for farmers. Currently, 80% of land in Colombia is owned by 14% of landowners, placing Colombia among the worst in the world for land distribution. How do you respond?",
            options: [
                { option: "Argue land is no longer important in a modern economy and promote investments in Bitcoin", left: -5, right: -5, result: "Your response is widely criticized as out of touch with the realities of rural communities, who need tangible solutions rather than speculative investments." },
                { option: "Do nothing, stating that land was legally acquired by the landowners and you are no communist", left: -5, right: +5, socioeconomic: -5, result: "Your stance on property rights is appreciated by some, but you face backlash for ignoring the pressing needs of rural communities and perpetuating inequality." },
                { option: "Force big landowners to sell their land and redistribute it to rural communities", left: +5, right: -5, socioeconomic: +5, result: "You are praised for addressing inequality and supporting rural communities, but face strong opposition from wealthy landowners and potential legal challenges." }
            ]
        },
        {
            scenario: "CLIMATE CHANGE\nAs president of Colombia, you are invited to the United Nations Climate Change Conference. The main topic is reducing dependence on fossil fuels to prevent climate change, which could negatively impact economies dependent on fossil fuel exports. As a major oil exporter, what is your country’s stance?",
            options: [
                { option: "Argue that your country cannot reduce oil exports due to economic impacts", left: -5, right: +5, political: -5, result: "You are seen as protecting the economy and ensuring continued growth, but are criticized for not addressing the urgent issue of climate change." },
                { option: "Indicate that your country may reduce oil production in the future", left: 0, right: 0, political: 0, result: "Your vague stance leaves both environmentalists and the oil industry uncertain about your plans, leading to mixed reactions." },
                { option: "Promise that your country will immediately halt new oil exploration", left: +5, right: -5, political: +5, result: "You are praised for taking bold action on climate change, showing strong environmental leadership, but face strong opposition from the oil industry and concerns about economic impacts." }
            ]
        },
        {
            scenario: "VIOLENCE\nThe government's human rights ombudsman reports that Colombia witnessed the killings of 215 social leaders and human rights activists in 2022, the highest toll ever recorded, as illegal armed groups intensified attacks in key drug-trafficking areas. What will your administration do?",
            options: [
                { option: "Increase military presence in conflict zones", left: -5, right: +5, political: -5, result: "Your strong response to violence is praised by some, but raises concerns about potential human rights abuses and escalating conflicts." },
                { option: "Call for increased peace talks with armed groups", left: +5, right: -5, political: 5, result: "Your commitment to peace and dialogue is appreciated by progressives and human rights advocates, but some see it as a sign of weakness and appeasement." },
                { option: "Promise to do better next year", left: 0, right: 0, result: "Your lack of concrete action is seen as insufficient to address the urgent crisis, leading to dissatisfaction and frustration from all sides." }
            ]
        },
        {
            scenario: "GLOBAL ECONOMIC CRISIS\nIt is the year 2025, and you have survived the first year of your presidency. During a meeting with your cabinet about the plans for the coming year, you suddenly receive an urgent call. The global stock market has just crashed. In the following months, a global economic crisis breaks out. Inflation is soaring, causing widespread economic hardship in Colombia. How will you address this issue?",
            options: [
                { option: "Implement strict price controls on essential goods", left: +10, right: -10, socioeconomic: +10, result: "You are praised for trying to protect the most vulnerable, but businesses warn that price controls could lead to shortages and worsen the crisis." },
                { option: "Cut government spending to reduce inflation", left: -10, right: +10, socioeconomic: -10, result: "You are commended for fiscal responsibility, but critics argue that cuts to social programs will hurt the poor and vulnerable." },
                { option: "Negotiate with international lenders for economic support", left: 0, right: 0, result: "Your diplomatic efforts are seen as a balanced approach, but people want immediate relief from the economic hardships they face." }
            ]
        },
        {
            scenario: "UNEMPLOYMENT\nUnemployment has always been a problem in Colombia, averaging 11% over the last decade. However, as a result of the global economic crisis, unemployment rates have skyrocketed to 25%. With many people without work and inflation on the rise, severe poverty is expected. What will you do to address this issue?",
            options: [
                { option: "Create a government-funded job program", left: +10, right: -10, socioeconomic: +10, result: "You are praised for directly addressing unemployment, but concerns are raised about the long-term sustainability and cost of the program." },
                { option: "Provide tax incentives for businesses to hire more workers", left: -10, right: +10, socioeconomic: -10, result: "Your pro-business approach is appreciated for potentially boosting employment, but critics argue it might not help those most in need." },
                { option: "Increase support for vocational training and education", left: 0, right: 0, result: "Your focus on long-term solutions through education is welcomed, but immediate relief is still needed." }
            ]
        },
        {
            scenario: "RADICAL LEFT PROTESTS\nDue to the economic hardship, radical left-wing groups have taken to the streets in many of the major cities, protesting economic inequality and demanding drastic changes. The protests are becoming more violent every day. The Ministry of the Interior informs you that action is needed now, before things spiral out of control. How will you respond?",
            options: [
                { option: "Meet with protest leaders and negotiate their demands", left: +10, right: -10, political: +10, result: "Your willingness to engage in dialogue is praised, but some see it as a sign of weakness." },
                { option: "Deploy police to disperse the protests", left: -10, right: +10, political: -10, result: "Your strong stance on maintaining order is appreciated by some, but criticized for potentially escalating tensions and infringing on civil rights." },
                { option: "Promise to address some of their concerns through reforms", left: -10, right: -10, result: "Your balanced approach is seen as a positive step, but both sides remain skeptical of your ability to deliver on promises." }
            ]
        },
        {
            scenario: "MIGRANT CRISIS\nWhile Colombians have struggled due to the global economic crisis, Venezuelans have barely survived. Weeks ago, the president of Venezuela, Nicolas Maduro, was deposed in a military coup. A civil war has broken out, leading to a massive influx of refugees into Colombia. There are already 2.5 million Venezuelans living in Colombia. The Ministry of Finance warns you that allowing more refugees will seriously strain the government budget. How will you address the migrant crisis?",
            options: [
                { option: "Increase funding for refugee camps and support services", left: +10, right: -10, cultural: +10, socioeconomic: +10, result: "You are praised for your humanitarian response, but concerns about the economic impact on Colombia are raised." },
                { option: "Strengthen border controls to limit the number of migrants", left: -10, right: +10, cultural: -10, socioeconomic: -10, result: "Your focus on protecting national resources is appreciated by some, but criticized for lacking compassion and ignoring human rights." },
                { option: "Work with international organizations for a coordinated response", left: 0, right: 0, result: "Your diplomatic approach is seen as a sensible way to share the burden, but immediate needs remain pressing." }
            ]
        },
        {
            scenario: "RADICAL RIGHT MILITIAS\nThe influx of refugees from Venezuela has led to increased xenophobia in the country. Some voices on the right argue that most refugees are criminals and that the government is not doing enough to protect its citizens. Recently, a radical right-wing civilian militia has formed, taking matters into their own hands. Reports have emerged of them violently attacking refugees to prevent them from entering their communities. How will you handle this situation?",
            options: [
                { option: "Arrest the militia leaders and promise to reinforce law enforcement", left: +10, right: -10, political: +10, result: "You are praised for upholding the rule of law, but face backlash from those who see the militia as necessary protection." },
                { option: "Integrate the militia into a community policing program", left: -10, right: +10, political: -10, result: "Your attempt to co-opt the militia is seen as a pragmatic move, but critics argue it legitimizes and empowers dangerous groups." },
                { option: "Create special refugee camps to protect the Venezuelans", left: +10, right: -10, political: +10, result: "Your approach is seen as cautious, but many worry it could allow the militia to grow unchecked." }
            ]
        },
        {
            scenario: "MILITARY DISSENT\nThe Minister of Defense has approached you with concerning news. Over the last few months, they have collected intel on high-ranking officials within the military. There are reports of growing dissent among the military leadership, with factions unhappy with your administration. The minister warns you that, if left unchecked, this could lead to a military coup. How will you address this?",
            options: [
                { option: "Increase military salaries and improve conditions", left: -10, right: +10, political: -10, result: "You are praised for supporting the military, but face criticism for diverting funds from other critical areas." },
                { option: "Replace dissenting leaders and reinforce loyalty to your administration", left: -10, right: +10, political: -10, result: "Your decisive action strengthens your control, but raises concerns about potential purges and instability." },
                { option: "Open a dialogue with military leaders to address their concerns", left: +10, right: -10, political: +10, result: "Your approach to dialogue is seen as wise, but some view it as a sign of weakness." }
            ]
        },
        {
            scenario: "RISE RADICAL LEFT\nDuring a meeting with your cabinet, you receive worrying news. The Minister of Labor informs you that the unemployment rate is still rising and is expected to increase to 30% before the end of the year. The Minister of Health shows you a report indicating that 200,000 Colombians have died this year from hunger-related diseases. The Minister of the Interior and the Minister of Defense warn you that people are losing faith in the government are flocking to the newly created radical Colombian Proletarian Party. There are rumors that the leadership of the party is planning a violent revolt against the government. How do you intervene?",
            options: [
                { option: "Launch a public works program to provide immediate employment and food aid to the poor", left: +10, right: -10, socioeconomic: +10, result: "Your swift action to provide jobs and food aid is praised for addressing the immediate needs of the population. However, critics warn that this approach may strain the national budget and not address the root causes of the crisis." },
                { option: "Increase security measures and crack down on the leadership of the Colombian Proletarian Party", left: -10, right: +10, political: -10, result: "Your decision to increase security and crack down on potential threats is seen as necessary by those seeking stability. However, it raises concerns about human rights and the potential for escalating violence." },
                { option: "Initiate negotiations with the Colombian Proletarian Party to address their concerns and seek a peaceful resolution", left: +10, right: -10, political: +10, result: "Your willingness to engage in dialogue is praised for seeking a peaceful solution. However, some view it as a sign of weakness and fear it might embolden other radical groups." }
            ]
        },
        {
            scenario: "Radical Left Revolt Scenario: This morning at 5:00 AM, Bogota woke up to the sounds of explosions and gunfire. The Colombian Proletarian Party has launched terrorist attacks on key spots in the city. You are rushed to a crisis meeting with the Minister of Defense and top generals. They inform you that the situation is still out of control. Citizens have taken to the streets to support the People’s Party. If more join, they might overwhelm the military forces in the city.",
            options: [
                { option: "Impose martial law and send more military forces to regain control.", left: -10, right: +10, politics: -10, result: "Your strong action to impose martial law and send more military forces is seen as needed to restore order. However, it raises concerns about civil rights and the potential for more violence."},
                { option: "Address the nation, call for calm, and promise quick action to fix the issues.", left: 0, right: 0, result: "Your call for calm and promise to address the issues is praised for trying to ease the tension. However, many think it is not enough without immediate action to restore security."},
                { option: "Start immediate talks with the leaders of the Colombian Proletarian Party to seek a ceasefire.", left: +10, right: -10, politics: +10, result: "Your willingness to negotiate is seen as a brave move for peace. However, it is also viewed as giving in to violence and could weaken your authority."}
            ]
        },
        {
            scenario: "POTENTIAL GLOBAL CONFLICT\nWhile the military is occupied with handling the national crisis, you receive a personal call from the President of the USA. He begins by expressing gratitude for Colombia's loyal support over the decades. The conversation then shifts to an urgent matter. According to CIA intelligence, China is planning to invade Taiwan in the coming months. The American president informs you that this could lead to a global conflict and calls on Colombia to support the USA if war breaks out.",
            options: [
                { option: "Pledge full military support to the USA", left: -10, right: +10, political: -10, result: "Your strong alliance with the USA is praised for strengthening international ties and demonstrating Colombia's commitment to global security. However, critics argue that this decision could drag Colombia into a dangerous and costly conflict." },
                { option: "Offer diplomatic support but avoid military involvement", left: 0, right: 0, result: "Your balanced stance of offering diplomatic support without military involvement is seen as pragmatic and cautious. However, some feel it lacks the commitment expected by an ally." },
                { option: "Refuse to support the USA in the conflict", left: +10, right: -10, political: +10, result: "Your decision to prioritize neutrality is praised by those who want to keep Colombia out of foreign wars. However, it is seen as abandoning an important ally and could damage relations with the USA." }
            ]
        },
        {
            scenario: "PEACE ACCORDS\nAfter years of political and social unrest, you have an opportunity to achieve something historic. Your administration has been negotiating with various armed groups, social leaders, and political factions to bring lasting peace to Colombia. The culmination of these efforts is a proposed Peace Accord, designed to address the root causes of conflict, improve social justice, and promote economic development. This accord has the potential to unify the country and end decades of violence. What will you do to finalize and implement the Peace Accord?",
            options: [
                { option: "Sign the Peace Accord and implement comprehensive reforms immediately", left: +5, right: -5, political: +5, result: "You are praised for bringing peace and unity to Colombia, but face criticism from the right for the concessions made." },
                { option: "Implement the Peace Accord gradually with input from local communities", left: +5, right: +5, result: "Your cautious approach ensures stability and gradual acceptance, receiving praise from both sides for its balanced nature." },
                { option: "Organize a series of national dialogues to build consensus before finalizing the Peace Accord", left: -5, right: +5, political: -5, result: "Your decision to build consensus through dialogue strengthens democratic values and political legitimacy, but some on the left see it as a delay tactic." }
            ]
        }
    ]
];
