
function getRandomName() {
    let names = ['Дмитро', 'Артем', 'Василь', 'Артур', 'Кирило'];
    return names[Math.floor(Math.random() * names.length)];
  }

  function getRandomProfession() {
    let professions = ['Піцайоло', 'Програміст', 'Менеджер', 'Дизайнер', 'Пожарний'];
    return professions[Math.floor(Math.random() * professions.length)];
  }
  function getRandomPhone() {
    let phone = '+380';
    for (let i = 0; i < 9; i++) {
      phone += Math.floor(Math.random() * 10);
    }
    return phone;
  }

  function createBusinessCard() {
    let name = getRandomName();
    let profession = getRandomProfession();
    let phone = getRandomPhone();
    return `
      <table style="border: 1px solid black; padding: 10px; margin: 10px;">
        <tr>
          <td><b>Ім'я:</b> ${name}</td>
        </tr>
        <tr>
          <td><b>Професія:</b> ${profession}</td>
        </tr>
        <tr>
          <td><b>Телефон:</b> ${phone}</td>
        </tr>
      </table>
    `;
  }

  function createBusinessCardSheet() {
    let html = '<table>';
    for (let i = 0; i < 12; i++) {
      html += '<tr>';
      for (let j = 0; j < 3; j++) {
        html += `<td>${createBusinessCard()}</td>`;
      }
      html += '</tr>';
    }
    html += '</table>';
    document.body.innerHTML = html;
  }
  createBusinessCardSheet(12,2);