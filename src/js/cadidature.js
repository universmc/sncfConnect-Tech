const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


// Project plan object
const candidaturePlan = {
  projectName: "Sncf_connect_&_Tech",
  phases: [
    { 
      phaseId:"phase0",  
      description:"model voice",
      phaseName: "step_1: Initialisation",
      duration:"minimum",
      tasks: [
        titre="VB",
        taskStep= [
          steps= [
            {
              "title": "Exploration de la plateforme",
              "description": "Naviguer sur l'interface utilisateur et découvrir toutes les fonctionnalités offertes par la plateforme. Consulter la documentation et les ressources en ligne pour obtenir une compréhension détaillée des capacités de la plateforme https://www.sncf-connect.com/."
            },
          step1="commenter l'annonce sur linkin",
          step3="'Regider lettre de motivation et curriculum Vitea, pour repondre a l'annce sur le site :[-]",
          step2="'Initialisation:[roleAssistant(Sncf_Conecte_&_Tech.ia app.ia) pour le site{https://www.sncf-connect.com/}]",
        ]
      ]],
    }
  ],
};

// Function to display the project plan in a structured format
function displayProjectPlan(plan) {
  console.log(`Project Name: ${plan.projectName}`);
  plan.phases.forEach(phase => {
    console.log(`\nPhase: ${phase.phaseName} - Duration: ${phase.duration}`);
    phase.tasks.forEach(task => {
      console.log(`- ${task}`);
    });
  });
}
async function main() {

  const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
  const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
  const bootstrap = bootcss+bootJs;

  const BsResponse = "`bootstrap`{html:5}";

  // Contenus pour les différents rôles dans le dialogue
  const Annonce = "L'Assistant(e) Chief of Staff qui aura le bonheur de m'accompagner au quotidien, jouera un beau rôle dans le dynamisme et le rayonnement de notre Direction Produits, dans la mise en valeur de nos nouveautés #sncfconnect, dans le suivi de nos performances Produits et dans tout un tas de belles choses, Tu es curieux, tu aimes faire des présentations percutantes, jongler avec des chiffres, interagir à tout niveau avec des gens passionnés, tu prépares un Master en Roadmap spé Agilité alors go postuler à l'annonce en commentaire. Et au delà, c'est une occasion parfaite de plonger au cœur des enjeux de mobilité digitale ET de contribuer à l'évolution de nos Produits qui facilitent les déplacements de millions de clients";
  const assistantContent = "Cher membre de l'équipe SNCF Connect & Tech, Je suis ravi de postuler au poste d'Assistant(e) du Chief of Staff au sein de la Direction Produits. Cette opportunité m'a immédiatement enthousiasmé, car elle combine mes passions pour la technologie, l'innovation et la durabilité. Je suis persuadé que mon expérience, mes compétences et mon esprit d'équipe pourront contribuer significativement à votre équipe. En tant que passionné du secteur ferroviaire et de la mobilité, j'ai toujours été fasciné par la façon dont les technologies numériques peuvent révolutionner la façon dont nous nous déplaçons. En plus de mon intérêt pour la technologie et l'innovation, je suis également en cours de formation en tant que développeur intégrateur web. Je crois que cette formation me permettra d'apporter une expertise technique supplémentaire à l'équipe SNCF Connect & Tech dans sa transition digitale. J'aspire à utiliser mes connaissances en développement web pour contribuer à la création d'une expérience utilisateur fluide et intuitive pour les clients de SNCF. Grâce à mon expérience en gestion de projet et en communication, j'ai appris à gérer plusieurs projets simultanément tout en communiquant efficacement avec les équipes interdisciplinaires. Mon intérêt pour l'innovation et ma capacité à penser de manière créative ont été développés au fil de mon parcours scolaire et de mes expériences. J'ai toujours cherché à améliorer les processus existants et à apporter des solutions innovantes aux problèmes complexes. Votre entreprise, SNCF Connect & Tech, est parfaitement alignée avec mes intérêts et mes valeurs. Je suis particulièrement attiré par votre vision d'une mobilité durable accessible à tous, et je souhaite apporter ma contribution à cet objectif grâce à mon travail au sein de votre équipe. Si j'étais sélectionné pour ce rôle, j'apporterais mon enthousiasme, ma créativité et ma motivation à votre équipe. J'aspire à m'investir dans la transformation digitale de la mobilité et à travailler en étroite collaboration avec des professionnels aussi passionnés que moi. Merci de prendre en considération ma candidature pour ce rôle passionnant. J'espère avoir l'occasion de discuter davantage de mon profil et de mes compétences lors d'un entretien. Cordialement,"
  const userContent = "role:assistant,content:prompt voix/ip 'SNCF connect & Tech, bonjour'";
  
  const Sncf_connect_Tech = "https://www.sncf-connect.com/";
  
  const Mission = "Missions principales SNCF Connect & Tech, filiale privée de SNCF Voyageurs, est le leader du e-commerce français et implémente les solutions digitales clients dans le secteur des mobilités.  En s’appuyant sur l’expertise de plus de 1200 collaborateurs basés à Lille, Nantes et Paris, SNCF Connect & Tech accompagne le groupe SNCF dans les projets de digitalisation. Son ambition : innover pour rendre les mobilités durables accessibles à tous. Intégré(e) au sein de la Direction Produits de SNCF Connect & Tech, l'assistant(e) du Chief of Staff jouera un rôle essentiel dans le dynamisme de la direction Produits et la mise en valeur de ses nouveautés. Cette alternance est une occasion parfaite de plonger au cœur des enjeux de mobilité digitale et de contribuer à l'évolution de services connectés qui facilitent les déplacements au quotidien pour des millions d'usagers.";  



  // Create a chat completion using the Groq SDK
  await groq.chat.completions.create({
    // Required parameters
    messages: [
        {role: "system", content: Annonce },
        {role: "system", content: assistantContent },
        {role: "system", content: userContent },
        {role: "system", content: Mission },
        {role: "system", content: bootstrap },
        {role: "system", content: Sncf_connect_Tech },
         // Création de l'instance
        {role: "assistant", name:"job",content:"phase1:Analyse de l'Annonce"},
        {role: "system", name:"SncfConnect",content:"phase2:Analyse de la response de `assistantContent`"},
        {role: "user", name:"Mike",content:"phase3:Analyse de la `Mission`"},
        {role: "system", name:"SncfConnect",content:"phase4:Création de l'instance`"},
        {role: "system", name:"SncfConnect",content:"Presentation du role:assistant,content:prompt(groq-sdk)"},
        {role: "system", name:"SncfConnect",content:"Presentation du role:user,content:Candidature"},
        {role: "system", name:"SncfConnect",content:"Presentation du role:system,content:'name:#sncfconnect'-app"},
        {role: "assistant", name:"job",content:"groq -seed index.html"},
     //  {role: "system", name:"systemDream",content:"phase1:Conceptualisation"},
     //  {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase2:Configuration"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase3: entraînement modèle IA"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase4: Itération & Des scripts Frontend"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase5: Itération & Des scripts Backend"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase6: Test & Debugage"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase7: Validation & Documentation"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase8: Deployement system Version"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase8: Annonce affiliation contribution"},
     // {role: "assistant",name:"✨_pi", content: "init"},
      //  {role: "user",name:"Groq", content: "Elaboration du bilan bilan avec le model de Gant"},
      //  {role: "system", content: ProjectPlan },
      //  {role: "assistant",name:"✨_pi", content: "groq -L"},
    {role: "system", name:"SncfConnect",content:"développement des phase(1 à 4) en lang:Fr au format response $index.html avec `bootstrap` avec un stylus en CSS et image logo `Sncf_connect_Tech` = https://www.sncf-connect.com/ "},
    {role: "assistant", name:"job",content:BsResponse},
    {role: "assistant", name:"job",content:"index.html"},
    ],
    model: "llama2-70b-4096",
    temperature: 0.8,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Candidate_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();