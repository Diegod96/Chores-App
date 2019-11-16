export class Chore {

    constructor(public title: string,
                public description: string,
                public points: number,
                public due: Date,
                public status: string,
    ) {

    }
}
