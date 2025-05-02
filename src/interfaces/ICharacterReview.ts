
/** Data structure for a review of a player character or the party as a whole. */
interface ICharacterReview {
    reviewer: string;
    /** Who is this review about? */
    subject?: string;
    /** The date the review was written. */
    date?: string;
    /** The date the review was edited. */
    lastEdit?: string;
    /** The body of the review. */
    text: string;
    /** Score on a scale of 1-5. */
    score: number;
}