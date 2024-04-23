const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
const bootstrap = bootcss+bootJs;
const logo = "https://jobs.connect-tech.sncf/offer/assistant-chief-of-staff-h-f-d0ea28283d";
const stylus = "https://www.sncf-connect.com/";

const BsResponse = "`bootstrap`{html:5}";

const context = "Response a une Candidature pour un POST à SNCF Connect & Tech, filiale privée de SNCF Voyageurs, est le leader du e-commerce français et implémente les solutions digitales clients dans le secteur des mobilités.  En s’appuyant sur l’expertise de plus de 1200 collaborateurs basés à Lille, Nantes et Paris, SNCF Connect & Tech accompagne le groupe SNCF dans les projets de digitalisation. Son ambition : innover pour rendre les mobilités durables accessibles à tous. Intégré(e) au sein de la Direction Produits de SNCF Connect & Tech, l'assistant(e) du Chief of Staff jouera un rôle essentiel dans le dynamisme de la direction Produits et la mise en valeur de ses nouveautés. Cette alternance est une occasion parfaite de plonger au cœur des enjeux de mobilité digitale et de contribuer à l'évolution de services connectés qui facilitent les déplacements au quotidien pour des millions d'usagers.";
const post = "https://jobs.connect-tech.sncf/offer/assistant-chief-of-staff-h-f-d0ea28283d";
const job = "https://jobs.connect-tech.sncf/images/sncfconnect&tech.png"
const sncfConnect = context+post+job;
const Mission = "intégrer la plus grande communauté d’experts des transformations numériques, en France, dans le secteur des mobilités et devenir un #DigitalMobilityChanger."

async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            {role: "system", content: bootstrap },
            {role: "system", content: BsResponse },
            {role: "system", content: stylus },
            {role: "system", content: logo },
            {role: "system", content: sncfConnect },
            {role: "system", content: Mission },
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Génère le code HTML d'une page d'index.html dans le [Context] de la 'Mission' `sncfConnect"
            },
            {
                role: "assistant",
                content: "Voici le code HTML d'une page d'index simple avec bootstrap:"
            },
        
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: "trés bien continu"
            }
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "DigitalMobility_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();