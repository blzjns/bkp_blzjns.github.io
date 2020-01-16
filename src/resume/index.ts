// import * as devSkills from "./devStack" // Maybe get all the skill combined from work experience to generate a list of coding skills, and technologies

// education
import { Programming } from "Etec"
import { SysAnalysis, Databases } from "Fatec"
import { CompSci } from "ConcordiaUniversity"

// professional experience
import { WebDev as internship1 } from "MadriComp"
import { GameDev as internship2 } from "ClanSoft"
import { SoftDev as internship3 } from "ChassisBrakesInternational"
import { SupportDev, DevOps, FrontEndDev } from "SAP"
import { FrontEndDev } from "Kronos"

import * as projects from "./careerProjects"

interface ISkill {
    proficiency: "Meh" | "Okay" | "Good" | "Very good"
}

class Jonas {

    public devSkills: {
        codingLangs: ISkill[],
        technologies: ISkill[]
    }

    constructor() {

    }
}