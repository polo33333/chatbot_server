
// check condition for card in bot_brain
exports.condition_checking = (conditions, entities, mem) => {
    try {
        let check = true;
        for (let i = 0; i < conditions.length; i++) {
            let item = conditions[i];
            if (item.name != null) {
                let temp = variable_find(item.name, entities);
                let mem_check = variable_find(item.name, mem.variables)
                switch (item.math_type) {
                    case 0: // =
                        {
                            if (mem_check != null && data_convert(item.value, temp.type) === data_convert(mem_check.value, temp.type))
                                check = true;
                            else return check = false;
                        }
                        break;
                    case 1: // !=
                        {
                            if (mem_check != null && data_convert(item.value, temp.type) != data_convert(mem_check.value, item.value))
                                check = true;
                            else return check = false;
                        }
                        break;
                    case 2: // <
                        {
                            if (mem_check != null && data_convert(item.value, temp.type) < data_convert(mem_check.value, item.value))
                                check = true;
                            else return check = false;
                        }
                        break;
                    case 3: // >
                        {
                            if (mem_check != null && data_convert(item.value, temp.type) > data_convert(mem_check.value, item.value))
                                check = true;
                            else return check = false;
                        }
                        break;
                    case 4: // <=
                        {
                            if (mem_check != null && data_convert(item.value, temp.type) <= data_convert(mem_check.value, item.value))
                                check = true;
                            else return check = false;
                        }
                        break;
                    case 5: // >=
                        {
                            if (mem_check != null && data_convert(item.value, temp.type) >= data_convert(mem_check.value, item.value))
                                check = true;
                            else return check = false;
                        }
                        break;
                    default:
                        check = true;
                        break;
                }
            }

        }
        return check;
    } catch (error) {
        console.log('Error[M_Condition:condition_checking]: ' + error);
        return false;
    }
}

variable_find = (name, arr) => {
    return temp = arr.find(o => o.name === name);
}

data_convert = (value, type) => {
    switch (type) {
        case 'String':
            value = value;
            break;
        case 'Number':
            value = Number(value);
            break;
        case 'Boolean':
            value = (value.toLowerCase() === 'true');
            break;
        default:
            break;
    }
    //console.log(value)
    return value;
}


