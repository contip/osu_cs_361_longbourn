const sql = require('../daos/db');

class ContactDetails {
    constructor(contactDetailsId, expertId, phone, workEmail, schoolEmail,
                gitHubUser, linkedInUrl, city, state, country) {
        this.contactDetailsId = contactDetailsId;
        this.expertId = expertId;
        this.phone = phone;
        this.workEmail = workEmail;
        this.schoolEmail = schoolEmail;
        this.gitHubUser = gitHubUser;
        this.linkedInUrl = linkedInUrl;
        this.city = city;
        this.state = state;
        this.country = country;
    }

    static fromReqBody(reqBody) {
        return new ContactDetails(
            reqBody.contactDetailsId,
            reqBody.expertId,
            reqBody.phone,
            reqBody.workEmail,
            reqBody.schoolEmail,
            reqBody.gitHubUser,
            reqBody.linkedInUrl,
            reqBody.city,
            reqBody.state,
            reqBody.country)
    }

    static fromNewExpertId(newExpertId, contactDetails) {
        return new ContactDetails(
            contactDetails.contactDetailsId,
            newExpertId,
            contactDetails.phone,
            contactDetails.workEmail,
            contactDetails.schoolEmail,
            contactDetails.gitHubUser,
            contactDetails.linkedInUrl,
            contactDetails.city,
            contactDetails.state,
            contactDetails.country)
    }

    static fromNewContactDetailsDb(newContactDetailsId, contactDetailsDb) {
        return new ContactDetails(
            newContactDetailsId,
            contactDetailsDb.expert_id,
            contactDetailsDb.phone,
            contactDetailsDb.work_email,
            contactDetailsDb.school_email,
            contactDetailsDb.github_user,
            contactDetailsDb.linkedin_url,
            contactDetailsDb.city,
            contactDetailsDb.state,
            contactDetailsDb.country)
    }

    static fromContactDetailsDb(contactDetailsDb) {
        return new ContactDetails(
            contactDetailsDb.contact_details_id,
            contactDetailsDb.expert_id,
            contactDetailsDb.phone,
            contactDetailsDb.work_email,
            contactDetailsDb.school_email,
            contactDetailsDb.github_user,
            contactDetailsDb.linkedin_url,
            contactDetailsDb.city,
            contactDetailsDb.state,
            contactDetailsDb.country)
    }
}

class ContactDetailsDb {
    constructor(contactDetails) {
        this.contact_details_id = contactDetails.contactDetailsId;
        this.expert_id = contactDetails.expertId;
        this.phone = contactDetails.phone;
        this.work_email = contactDetails.workEmail;
        this.school_email = contactDetails.schoolEmail;
        this.github_user = contactDetails.gitHubUser;
        this.linkedin_url = contactDetails.linkedInUrl;
        this.city = contactDetails.city;
        this.state = contactDetails.state;
        this.country = contactDetails.country;
    }

    static fromExpertId(newExpertId, contactDetails) {
        let contactDetailsDb = new ContactDetailsDb(contactDetails);
        contactDetailsDb.expert_id = newExpertId;
        return contactDetailsDb;
    }
}



module.exports = {
    ContactDetails, ContactDetailsDb
};