

class LocalStotrage {
    static getItem(key) {
        return localStorage.getItem(key);
    }

    static setItem(key, value) {
        localStorage.setItem(key, value);
    }

    static delItem(key) {
        localStorage.removeItem(key);
    }

    static delAll() {
        localStorage.clear();
    }
}

export default LocalStotrage