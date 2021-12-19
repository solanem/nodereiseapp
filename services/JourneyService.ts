import crypto from "crypto";
import { Knex } from "knex";

type Journey = {
    name: string;
    land: string;
    startDate: Date;
    endDate: Date;
};

type SavedJourney = Journey & {
    id: string;
};

class JourneyService {
    journeys: SavedJourney[] = [];
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex;
    }

    async getAllJourneys(username: string): Promise<Journey[]>{
        return this.knex("journeys");
        //Todo add username to journey table for the reference to the user
        //return this.knex("journeys").where(username: username);
    }

    async addJourney(journey: Journey): Promise<SavedJourney> {
        const newJourney = {
            ...journey,
            id: crypto.randomUUID(),
        };
        await this.knex("journeys").insert(newJourney);
        return newJourney;
    }

    async editJourney(journey: Journey): Promise<void> {
        await this.knex("journeys").where({ name: journey.name }).update(journey);
    }

    async deleteJourney(uuid: string): Promise<void> {
        await this.knex("journeys").where({ id: uuid }).delete();
    }
}




export default JourneyService;