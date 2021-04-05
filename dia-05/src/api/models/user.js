class User {

    constructor({id, email, password, salt}) {
        this.id = id
        this.email = email
        this.password = password
        this.salt = salt
    }
}