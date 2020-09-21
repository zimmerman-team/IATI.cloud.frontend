export function getResults(data, searchVal) {
  const results: any = [];
  const searchValue = searchVal.toLowerCase();
  if (searchVal !== '') {
    data.forEach((category) => {
      const item = category.name.toLowerCase();
      let categoryPass = item.indexOf(searchValue) > -1;
      let item1Pass = false;
      let item2Pass = false;
      let item3Pass = false;
      let catIndex = 0;
      let item1Index = 0;
      let item2Index = 0;
      if (categoryPass) {
        results.push(category);
        catIndex = results.length - 1;
      }
      if (!categoryPass) {
        category.item.forEach((item1) => {
          item1Pass = item1.name.toLowerCase().indexOf(searchValue) > -1;
          if (!categoryPass && item1Pass) {
            results.push({ ...category, item: [] });
            catIndex = results.length - 1;
            categoryPass = true;
          }
          if (item1Pass) {
            results[catIndex].item.push(item1);
            item1Index = results[catIndex].item.length - 1;
          } else if (item1.item) {
            item1.item.forEach((item2) => {
              item2Pass = item2.name.toLowerCase().indexOf(searchValue) > -1;
              if ((!categoryPass || !item1Pass) && item2Pass) {
                if (!categoryPass) {
                  results.push({ ...category, item: [] });
                  catIndex = results.length - 1;
                  categoryPass = true;
                }
                if (!item1Pass) {
                  results[catIndex].item.push({ ...item1, item: [] });
                  item1Index = results[catIndex].item.length - 1;
                  item1Pass = true;
                }
              }
              if (item2Pass) {
                results[catIndex].item[item1Index].item.push(item2);
                item2Index =
                  results[results.length - 1].item[item1Index].item.length - 1;
              } else if (item2.item) {
                item2.item.forEach((item3) => {
                  item3Pass =
                    item3.name.toLowerCase().indexOf(searchValue) > -1;
                  if (
                    (!categoryPass || !item1Pass || !item2Pass) &&
                    item3Pass
                  ) {
                    if (!categoryPass) {
                      results.push({ ...category, item: [] });
                      catIndex = results.length - 1;
                      categoryPass = true;
                    }
                    if (!item1Pass) {
                      results[catIndex].item.push({ ...item1, item: [] });
                      item1Index = results[catIndex].item.length - 1;
                      item1Pass = true;
                    }
                    if (!item2Pass) {
                      results[catIndex].item[item1Index].item.push({
                        ...item2,
                        item: [],
                      });
                      item2Index =
                        results[results.length - 1].item[item1Index].item
                          .length - 1;
                      item2Pass = true;
                    }
                  }
                  if (item3Pass) {
                    results[catIndex].item[item1Index].item[
                      item2Index
                    ].item.push({
                      ...item3,
                      item: [],
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
    return results;
  }
  return data;
}
