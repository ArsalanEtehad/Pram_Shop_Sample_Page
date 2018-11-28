const url = 'http://localhost:3001/data'
export const fetchAll = async()=> fetch(url).then(res=>res.json());

// export const fetchAll = async()=>{
//   throw('Product is not found')
// };
