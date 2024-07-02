import 'cypress-file-upload';

describe('template spec', () => {
  it('Visits the page and checks for an element', () => {
    // Откройте страницу:
    cy.visit('https://js-55fbfg.stackblitz.io/');

    // Нажмите кнопку "Run this project"
    cy.contains('Run this project').click();

    // Ждем, пока загрузится новая страница
    cy.wait(5000); // Ждать 5 секунд для загрузки новой страницы

    // Нажмите кнопку "Добавить"
    cy.get('button').contains('Добавить').click();

    // Убедитесь, что элемент для загрузки файла виден
    cy.get('.card.dropbox-panel').should('be.visible');

    // Имитация перетаскивания файла
    const filePath = '.\\cypress\\e2e\\test_certs\\privat_2018.cer'; // Относительный путь к файлу в папке fixtures

    // Перетащить файл в элемент с классом "dropbox-panel"
    cy.get('.dropbox').selectFile(filePath, {action:'drag-drop'});

    // Проверить, что файл появился в div с тегом a
    cy.get('div a').contains('UA-14360570-2018').should('be.visible');

    // Проверить, что данные файла появились на инфопанели
    cy.get('table td').contains('UA-14360570-2018').should('be.visible');
    cy.get('table td').contains('UA-00015622-2017').should('be.visible');
    cy.get('table td').contains('2018-11-06 11:56:00 UTC').should('be.visible');
    cy.get('table td').contains('2023-11-06 11:56:00 UTC').should('be.visible');
  });
});
