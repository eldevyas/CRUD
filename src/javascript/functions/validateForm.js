class Validator {
    constructor() {}


    validatePassword(password) {
        let Status = {
            success: true,
            message: ''
        }

        if (password.length < 8) {
            Status.success = false;
            Status.message = 'Password must be at least 8 characters long.';
        } else if (password.search(/[a-z]/i) < 0) {
            Status.success = false;
            Status.message = 'Password must contain only letters and numbers.';
        } else {
            Status.success = true;
            Status.message = 'Password is valid.';
        }

        return Status;
    }


    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateUserName(username) {
        /* 
          Usernames can only have: 
          - Lowercase Letters (a-z) 
          - Numbers (0-9)
          - Dots (.)
          - Underscores (_)
        */
        const res = /^[a-z0-9_\.]+$/.exec(username);
        const valid = !!res;
        return valid;
    }
}


export default Validator;