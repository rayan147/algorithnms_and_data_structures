/**
 *@name quickFind
    *@description  Quick Find Algorithm Implementation in Javascript  . 
     it is a union-find data structure that keeps track
      of a set of elements partitioned into a number of disjoint subsets.
    *@param {array} ids - array of ids
    
 */

const idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const quickFind = (ids) => {
    const idMap = {};
    ids.forEach((id) => {
        idMap[id] = id;
    });
    console.log(idMap);
    const find = (id) => {
        return idMap[id];
    };
    
    const connected = (p, q) => {
        return find(p) === find(q);
    };
    
    const union = (p, q) => {
        const pId = find(p);
        const qId = find(q);
        if (pId === qId) return;
        ids.forEach((id) => {
        if (idMap[id] === pId) {
            idMap[id] = qId;
        }
        });
    };
    
    return {
        connected,
        union,
        find,
    };
    };
const qf = quickFind(idArray);
console.log(qf.find(1));

