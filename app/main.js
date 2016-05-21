import { doPromise } from './promise-test';
import { doGenerator } from './generator-test';

$('#btn-promise').on('click', (e)=>{
    e.preventDefault();
    doPromise();
});

$('#btn-generator').on('click', (e)=>{
    e.preventDefault();
    doGenerator();
});