import { debug } from 'debug';

export class LogFactory {
    static factory(classe: any) {
        return debug(classe.name);
    }
}
