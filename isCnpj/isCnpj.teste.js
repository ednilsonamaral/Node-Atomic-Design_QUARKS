'use strict';

const expect = require('chai').expect;

const valueFalse = ['','000000000','abc',0,94159237000163];
const valueTrue = ['22135485000163','72742590000139',
'14998592000197','65194774000146','94159237000163'];

const testeFalse = (values) => {
	values.forEach((element,index) =>{
		it('Testando: '+element,() => {
			expect(require('./isCnpj')(element)).to.equal(false);
		});
	});
}


const testeTrue = (values) => {
	values.forEach( (element,index) => {
		it('Testando: '+element,() => {
			expect(require('./isCnpj')(element)).to.equal(true);
		});
	});
}

describe('Teste de cnpj ',() => {
	describe('cnpj invalido: ',() => testeFalse(valueFalse));
	describe('cnpj validos: ',() => testeTrue(valueTrue));
});


