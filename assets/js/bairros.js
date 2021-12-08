document.addEventListener("DOMContentLoaded", function(){

  const file_path = '/covid/maps/maps_dict.json';
  let obj = load_json(file_path);  
});


function load_json(file_path) {
  fetch(file_path)
  .then(response => response.text())
  .then(data => {
      const obj = JSON.parse(data);
      const select_cargo = document.getElementById('sel_cargo');
      const select_year = document.getElementById('sel_ano');
      const select_cand = document.getElementById('sel_cand');

      select_cargo.onchange = (e) => {
        e.preventDefault();
        removeAll(select_year);
        const option = new Option('---', '---');
        select_year.add(option, undefined);
        cargo = select_cargo.value;
        if (cargo !== '---') {
          let years_dict = obj[cargo];
          for (const [ano, files_dict] of Object.entries(years_dict)) {
            const option = new Option(ano, ano);
            select_year.add(option, undefined);
          }
        }
      }

      select_cand.onchange = (e) => {
        e.preventDefault();
        cand_file = select_cand.value;
        if (cand_file !== '---') {
          console.log(cand_file);
          load_map(cand_file);
        }
      }

      select_year.onchange = (e) => {
        e.preventDefault();
        removeAll(select_cand);
        cargo = select_cargo.value;
        ano = select_year.value;
        if (ano !== '---') {
          cand_dict = obj[cargo][ano];
          for (const [cand, cand_file] of Object.entries(cand_dict)) {
            const option = new Option(cand, cand_file);
            select_cand.add(option, undefined);
          }
        }
      }

    });
}

function removeAll(selectBox) {
  while (selectBox.options.length > 0) {
      selectBox.remove(0);
  }
}

function load_map(input_file) {
  // let name = 'test.html';
  console.log(input_file);

  if (input_file === "nenhum") {
    document.querySelector('#teste01').innerHTML = '';
  }
  else {
    let iframe_html = '<iframe src="/covid/maps/' + input_file + '" allowfullscreen=""';
    // iframe_html += input_file;
    iframe_html += ' width="100%" height="400px" frameborder="0"></iframe>';
    document.querySelector('#teste01').innerHTML = iframe_html;
  }
  
}
