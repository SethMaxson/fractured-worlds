export interface IUserProfileEntry {
    id: string;
    /**Username */
    un: string;
    realName?: string;
}

export const UserProfiles: IUserProfileEntry[] = [
    {
        id: "althea",
        un: "Seeker-Of-Knowledge (Althea H.)",
    },
    {
        id: "cade",
        un: "Cade B."
    },
    {
        id: "caydence",
        un: "Caydence 👑🐝",
        realName: "Caydence Bramble"
    },
    {
        id: "ella",
        un: "SciencePrincess26 (Ella F.)"
    },
    {
        id: "gugg",
        un: "gugg"
    },
    {
        id: "kenji",
        un: "Boxboy"
    },
    {
        id: "malladine",
        un: "Mommy Dearest"
    },
    {
        id: "tankman",
        un: "CEO@TankmanEnterprises.tank",
        realName: "Tankman"
    },
];