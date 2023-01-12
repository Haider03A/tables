const tbody = document.querySelector('tbody');

const dataFetcher = async _ => {
  const res = await fetch('/api');
  const data = await res.json();
  console.log('Returned data');
  
  return data
}

const main = async _ => {

  try {
    const rows = await dataFetcher();
    rows.forEach((row, i) => {

      const initTrEle = document.createElement('tr');
      const initThEle = document.createElement('th');
      const initTdEle1 = document.createElement('td');
      const initTdEle2 = document.createElement('td');
      const initTdEle3 = document.createElement('td');

      /*
      initTdEle1.setAttribute('contenteditable', true);
      initTdEle2.setAttribute('contenteditable', true)
      initTdEle3.setAttribute('contenteditable', true)
      */

      !row['المادة'] && (row['المادة'] = '');
      !row['الكمية'] && (row['الكمية'] = '');
      !row['ملاحظات'] && (row['ملاحظات'] = '');

      initThEle.append(++i);
      initTdEle1.append(row['المادة'])
      initTdEle2.append(row['الكمية'])
      initTdEle3.append(row['ملاحظات'])
      initTrEle.append(initThEle);
      initTrEle.append(initTdEle1);
      initTrEle.append(initTdEle2);
      initTrEle.append(initTdEle3);
      tbody.append(initTrEle)

    })
  } catch (err) {
    console.error(err)
  }

}

const checkFetch = async _ => {
  try {
  const data = await dataFetcher();
  console.log(data)
  } catch(err) {
    console.error(err)
  }
}
checkFetch()