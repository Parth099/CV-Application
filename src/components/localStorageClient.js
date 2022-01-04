class LocalStorageClient {
    constructor(key) {
        this.key = key;
    }
    save(obj) {
        /*object json-ify
        {
            personalData: {
                "First Name": "",
                "Last Name": "",
                Title: "",
                Email: "",
                phoneNum: "",
                zip: "",
                cityState: "",
            },
            education: [],
            experience: [],
            project: [],
            skills: [],
        };
        */
        localStorage.setItem(this.key, JSON.stringify(obj));
    }
    retrieve() {
        return JSON.parse(localStorage.getItem(this.key));
    }
    reset() {
        localStorage.clear();
    }
}

export default LocalStorageClient;
