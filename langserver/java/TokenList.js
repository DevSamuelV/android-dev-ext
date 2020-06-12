/**
 * @typedef {import('./tokenizer').Token} Token
 */
const ParseProblem = require('./parsetypes/parse-problem');

class TokenList {
    /**
     * @param {Token[]} tokens
     */
    constructor(tokens) {
        this.tokens = tokens;
        this.idx = -1;
        /** @type {Token} */
        this.current = null;
        this.inc();
        /** @type {ParseProblem[]} */
        this.problems = [];
    }

    inc() {
        for (; ;) {
            this.current = this.tokens[this.idx += 1];
            if (!this.current || this.current.kind !== 'wsc') {
                return this.current;
            }
        }
    }

    /**
     * Token lookahead. The current token is unaffected by this method.
     * @param {number} n number of tokens to look ahead
     */
    peek(n) {
        let token, idx = this.idx;
        while (--n >= 0) {
            for (; ;) {
                token = this.tokens[idx += 1];
                if (!token || token.kind !== 'wsc') {
                    break;
                }
            }
        }
        return token;
    }

    /**
     * Check if the current token matches the specified value and consumes it
     * @param {string} value
     */
    isValue(value) {
        if (this.current && this.current.value === value) {
            this.inc();
            return true;
        }
        return false;
    }

    /**
     * Check if the current token matches the specified kind and consumes it
     * @param {string} kind
     */
    isKind(kind) {
        if (this.current && this.current.kind === kind) {
            this.inc();
            return true;
        }
        return false;
    }

    /**
     * Check if the current token matches the specified value and consumes it or reports an error
     * @param {string} value
     */
    expectValue(value) {
        if (this.isValue(value)) {
            return true;
        }
        const token = this.current || this.tokens[this.tokens.length - 1];
        const addproblem = require("./body-parser3").addproblem;
        addproblem(this, ParseProblem.Error(token, `${value} expected`));
        return false;
    }

    get previous() {
        for (let idx = this.idx - 1; idx >= 0; idx--) {
            if (idx <= 0) {
                return this.tokens[0];
            }
            if (this.tokens[idx].kind !== 'wsc') {
                return this.tokens[idx];
            }
        }
    }

    /**
     * @param {number} start 
     * @param {number} delete_count 
     * @param  {...Token} insert 
     */
    splice(start, delete_count, ...insert) {
        this.tokens.splice(start, delete_count, ...insert);
        this.current = this.tokens[this.idx];
    }
}

exports.TokenList = TokenList;
