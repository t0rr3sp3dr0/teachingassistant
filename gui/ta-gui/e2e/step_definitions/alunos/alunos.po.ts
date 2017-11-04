import { browser, by, element } from 'protractor';

export class TaGuiPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getTitle() {
    return browser.getTitle();
  }

  public getAlunosLink() {
    return element(by.id('alunosLink'));
  }

  public getAlunosRows() {
    return element.all(by.className('alunoRow'));
  }

  public getAlunosNomes() {
    return element.all(by.className('nomeValue'));
  }

  public getAlunosCPFs() {
    return element.all(by.className('cpfValue'));
  }

  public getAlunosEmails() {
    return element.all(by.className('emailValue'));
  }

  public getAlunoNome(el) {
    return el.element(by.className('nomeValue')).getText();
  }

  public getAlunoCPF(el) {
    return el.element(by.className('cpfValue')).getText();
  }

  public getAlunoEmail(el) {
    return el.element(by.className('emailValue')).getText();
  }

  public getNomeInput() {
    return element(by.id('nomeInput'));
  }

  public getCPFInput() {
    return element(by.id('cpfInput'));
  }

  public getEmailInput() {
    return element(by.id('emailInput'));
  }

  public getAdicionarButton() {
    return element(by.id('adicionarButton'));
  }
}
