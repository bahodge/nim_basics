/* Generated by the Nim Compiler v1.4.8 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI1194637 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1188044 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI1380043 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI1194408 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194728 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI1188013 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI1188015 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI1194723 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI1194617 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194619 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194633 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194635 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI1194635 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194635.node = NNI1194635;
var NNI1194633 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194633.node = NNI1194633;
var NNI1194619 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194619.node = NNI1194619;
NTI1194723.base = NTI1194617;
NTI1194728.base = NTI1194617;
var NNI1194617 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI1194723, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI1188015, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI1188013, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI1188013, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI1194728, name: "up", sons: null}]};
NTI1194617.node = NNI1194617;
var NNI1194408 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194408.node = NNI1194408;
NTI1194617.base = NTI1194408;
NTI1194619.base = NTI1194617;
NTI1194633.base = NTI1194619;
NTI1194635.base = NTI1194633;
var NNI1380043 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI1188015, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI1188044, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI1188015, name: "Field2", sons: null}]};
NTI1380043.node = NNI1380043;
var NNI1194637 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194637.node = NNI1194637;
NTI1194637.base = NTI1194633;
function makeNimstrLit(c_1455062) {
      var ln = c_1455062.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_1455062.charCodeAt(i);
  }
  return result;
  

  
}
function arrayConstr(len_1480067, value_1480068, typ_1480069) {
        var result = new Array(len_1480067);
    for (var i = 0; i < len_1480067; ++i) result[i] = nimCopy(null, value_1480068, typ_1480069);
    return result;
  

  
}
function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);
function nimCopy(dest_1470023, src_1470024, ti_1470025) {
  var result_1475219 = null;

    switch (ti_1470025.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_1465401(ti_1470025))) {
      result_1475219 = src_1470024;
      }
      else {
        result_1475219 = [src_1470024[0], src_1470024[1]];
      }
      
      break;
    case 19:
            if (dest_1470023 === null || dest_1470023 === undefined) {
        dest_1470023 = {};
      }
      else {
        for (var key in dest_1470023) { delete dest_1470023[key]; }
      }
      for (var key in src_1470024) { dest_1470023[key] = src_1470024[key]; }
      result_1475219 = dest_1470023;
    
      break;
    case 18:
    case 17:
      if (!((ti_1470025.base == null))) {
      result_1475219 = nimCopy(dest_1470023, src_1470024, ti_1470025.base);
      }
      else {
      if ((ti_1470025.kind == 17)) {
      result_1475219 = (dest_1470023 === null || dest_1470023 === undefined) ? {m_type: ti_1470025} : dest_1470023;
      }
      else {
        result_1475219 = (dest_1470023 === null || dest_1470023 === undefined) ? {} : dest_1470023;
      }
      }
      nimCopyAux(result_1475219, src_1470024, ti_1470025.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_1470024 === null) {
        result_1475219 = null;
      }
      else {
        if (dest_1470023 === null || dest_1470023 === undefined) {
          dest_1470023 = new Array(src_1470024.length);
        }
        else {
          dest_1470023.length = src_1470024.length;
        }
        result_1475219 = dest_1470023;
        for (var i = 0; i < src_1470024.length; ++i) {
          result_1475219[i] = nimCopy(result_1475219[i], src_1470024[i], ti_1470025.base);
        }
      }
    
      break;
    case 28:
            if (src_1470024 !== null) {
        result_1475219 = src_1470024.slice(0);
      }
    
      break;
    default: 
      result_1475219 = src_1470024;
      break;
    }

  return result_1475219;

}
function cstrToNimstr(c_1455079) {
      var ln = c_1455079.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_1455079.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_1455079.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
function toJSStr(s_1455096) {
                    var Tmp5;
            var Tmp7;

  var result_1455097 = null;

    var res_1455170 = newSeq_1455128((s_1455096).length);
    var i_1455172 = 0;
    var j_1455174 = 0;
    L1: do {
        L2: while (true) {
        if (!(i_1455172 < (s_1455096).length)) break L2;
          var c_1455175 = s_1455096[i_1455172];
          if ((c_1455175 < 128)) {
          res_1455170[j_1455174] = String.fromCharCode(c_1455175);
          i_1455172 += 1;
          }
          else {
            var helper_1455198 = newSeq_1455128(0);
            L3: do {
                L4: while (true) {
                if (!true) break L4;
                  var code_1455199 = c_1455175.toString(16);
                  if ((((code_1455199) == null ? 0 : (code_1455199).length) == 1)) {
                  helper_1455198.push("%0");;
                  }
                  else {
                  helper_1455198.push("%");;
                  }
                  
                  helper_1455198.push(code_1455199);;
                  i_1455172 += 1;
                    if (((s_1455096).length <= i_1455172)) Tmp5 = true; else {                      Tmp5 = (s_1455096[i_1455172] < 128);                    }                  if (Tmp5) {
                  break L3;
                  }
                  
                  c_1455175 = s_1455096[i_1455172];
                }
            } while(false);
++excHandler;
            Tmp7 = framePtr;
            try {
            res_1455170[j_1455174] = decodeURIComponent(helper_1455198.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
            framePtr = Tmp7;
            res_1455170[j_1455174] = helper_1455198.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Tmp7;
            }
          }
          
          j_1455174 += 1;
        }
    } while(false);
    if (res_1455170.length < j_1455174) { for (var i=res_1455170.length;i<j_1455174;++i) res_1455170.push(null); }
               else { res_1455170.length = j_1455174; };
    result_1455097 = res_1455170.join("");

  return result_1455097;

}
function raiseException(e_1420218, ename_1420219) {
    e_1420218.name = ename_1420219;
    if ((excHandler == 0)) {
    unhandledException(e_1420218);
    }
    
    e_1420218.trace = nimCopy(null, rawWriteStackTrace_1410260(), NTI1188013);
    throw e_1420218;

  
}
function modInt(a_1460491, b_1460492) {
        if (b_1460492 == 0) raiseDivByZero();
    if (b_1460492 == -1 && a_1460491 == 2147483647) raiseOverflow();
    return Math.trunc(a_1460491 % b_1460492);
  

  
}
function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
function addInt(a_1460419, b_1460420) {
        var result = a_1460419 + b_1460420;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

function add_1357211(x_1357214, x_1357214_Idx, y_1357215) {
          if (x_1357214[x_1357214_Idx] === null) { x_1357214[x_1357214_Idx] = []; }
      var off = x_1357214[x_1357214_Idx].length;
      x_1357214[x_1357214_Idx].length += y_1357215.length;
      for (var i = 0; i < y_1357215.length; ++i) {
        x_1357214[x_1357214_Idx][off+i] = y_1357215.charCodeAt(i);
      }
    

  
}
function isFatPointer_1465401(ti_1465403) {
  var result_1465404 = false;

  BeforeRet: do {
    result_1465404 = !((ConstSet1[ti_1465403.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_1465404;

}
function nimCopyAux(dest_1470028, src_1470029, n_1470031) {
    switch (n_1470031.kind) {
    case 0:
      break;
    case 1:
            dest_1470028[n_1470031.offset] = nimCopy(dest_1470028[n_1470031.offset], src_1470029[n_1470031.offset], n_1470031.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_1470031.sons.length; i++) {
      nimCopyAux(dest_1470028, src_1470029, n_1470031.sons[i]);
    }
    
      break;
    case 3:
            dest_1470028[n_1470031.offset] = nimCopy(dest_1470028[n_1470031.offset], src_1470029[n_1470031.offset], n_1470031.typ);
      for (var i = 0; i < n_1470031.sons.length; ++i) {
        nimCopyAux(dest_1470028, src_1470029, n_1470031.sons[i][1]);
      }
    
      break;
    }

  
}
function auxWriteStackTrace_1380038(f_1380040) {
          var Tmp3;

  var result_1380041 = [[]];

    var it_1380051 = f_1380040;
    var i_1380053 = 0;
    var total_1380055 = 0;
    var tempFrames_1380062 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI1380043);
    L1: do {
        L2: while (true) {
          if (!!((it_1380051 == null))) Tmp3 = false; else {            Tmp3 = (i_1380053 <= 63);          }        if (!Tmp3) break L2;
          tempFrames_1380062[i_1380053].Field0 = it_1380051.procname;
          tempFrames_1380062[i_1380053].Field1 = it_1380051.line;
          tempFrames_1380062[i_1380053].Field2 = it_1380051.filename;
          i_1380053 += 1;
          total_1380055 += 1;
          it_1380051 = it_1380051.prev;
        }
    } while(false);
    L4: do {
        L5: while (true) {
        if (!!((it_1380051 == null))) break L5;
          total_1380055 += 1;
          it_1380051 = it_1380051.prev;
        }
    } while(false);
    result_1380041[0] = nimCopy(null, [], NTI1188013);
    if (!((total_1380055 == i_1380053))) {
    result_1380041[0].push.apply(result_1380041[0], makeNimstrLit("("));;
    result_1380041[0].push.apply(result_1380041[0], cstrToNimstr(((total_1380055 - i_1380053))+""));;
    result_1380041[0].push.apply(result_1380041[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    L6: do {
      var j_1395236 = 0;
      var colontmp__1855051 = 0;
      colontmp__1855051 = (i_1380053 - 1);
      var res_1855056 = colontmp__1855051;
      L7: do {
          L8: while (true) {
          if (!(0 <= res_1855056)) break L8;
            j_1395236 = res_1855056;
            result_1380041[0].push.apply(result_1380041[0], cstrToNimstr(tempFrames_1380062[j_1395236].Field2));;
            if ((0 < tempFrames_1380062[j_1395236].Field1)) {
            result_1380041[0].push.apply(result_1380041[0], makeNimstrLit("("));;
            result_1380041[0].push.apply(result_1380041[0], cstrToNimstr((tempFrames_1380062[j_1395236].Field1)+""));;
            if (false) {
            result_1380041[0].push.apply(result_1380041[0], makeNimstrLit(", "));;
            result_1380041[0].push.apply(result_1380041[0], makeNimstrLit("0"));;
            }
            
            result_1380041[0].push.apply(result_1380041[0], makeNimstrLit(")"));;
            }
            
            result_1380041[0].push.apply(result_1380041[0], makeNimstrLit(" at "));;
            add_1357211(result_1380041, 0, tempFrames_1380062[j_1395236].Field0);
            result_1380041[0].push.apply(result_1380041[0], makeNimstrLit("\x0A"));;
            res_1855056 -= 1;
          }
      } while(false);
    } while(false);

  return result_1380041[0];

}
function rawWriteStackTrace_1410260() {
  var result_1410262 = [];

    if (!((framePtr == null))) {
    result_1410262 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_1380038(framePtr) || []), NTI1188013);
    }
    else {
      result_1410262 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI1188013);
    }
    

  return result_1410262;

}
function newSeq_1455128(len_1455131) {
  var result_1455133 = [];

  var F={procname:"newSeq.newSeq",prev:framePtr,filename:"/home/benhodge/.asdf/installs/nim/1.4.8/lib/system.nim",line:0};
  framePtr = F;
    F.line = 656;
    result_1455133 = new Array(len_1455131); for (var i=0;i<len_1455131;++i) {result_1455133[i]=null;}  framePtr = F.prev;

  return result_1455133;

}
function unhandledException(e_1415059) {
    var buf_1415060 = [[]];
    if (!(((e_1415059.message).length == 0))) {
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_1415060[0].push.apply(buf_1415060[0], e_1415059.message);;
    }
    else {
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit(" ["));;
    add_1357211(buf_1415060, 0, e_1415059.name);
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit("]\x0A"));;
    buf_1415060[0].push.apply(buf_1415060[0], rawWriteStackTrace_1410260());;
    var cbuf_1420201 = toJSStr(buf_1415060[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_1420201);
  }
  else {
    throw cbuf_1420201;
  }
  

  
}
function raiseDivByZero() {
    raiseException({message: makeNimstrLit("division by zero"), parent: null, m_type: NTI1194635, name: null, trace: [], up: null}, "DivByZeroDefect");

  
}
function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI1194637, name: null, trace: [], up: null}, "OverflowDefect");

  
}
function checkOverflowInt(a_1460403) {
        if (a_1460403 > 2147483647 || a_1460403 < -2147483648) raiseOverflow();
  

  
}
var F={procname:"module exercises1",prev:framePtr,filename:"/home/benhodge/personal/nim/nim_basics/exercises1.nim",line:0};
framePtr = F;
L1: do {
  F.line = 35;
  var i_1852011 = [0];
  F.line = 77;
  var res_1855042 = 0;
  L2: do {
    F.line = 78;
      L3: while (true) {
      if (!(res_1855042 <= 16)) break L3;
        F.line = 35;
        i_1852011[0] = res_1855042;
        F.line = 36;
        var str_1852012 = [[]];
        if ((modInt(i_1852011[0], 3) == 0)) {
        F.line = 38;
        str_1852012[0].push.apply(str_1852012[0], makeNimstrLit("fizz"));;
        }
        
        if ((modInt(i_1852011[0], 5) == 0)) {
        F.line = 41;
        str_1852012[0].push.apply(str_1852012[0], makeNimstrLit("buzz"));;
        }
        
        if ((0 < (str_1852012[0]).length)) {
        F.line = 44;
        rawEcho(makeNimstrLit("i: "), cstrToNimstr((i_1852011[0])+""), makeNimstrLit(" str: "), str_1852012[0]);
        }
        
        F.line = 80;
        res_1855042 = addInt(res_1855042, 1);
      }
  } while(false);
} while(false);
framePtr = F.prev;
var F={procname:"module exercises1",prev:framePtr,filename:"/home/benhodge/personal/nim/nim_basics/exercises1.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module exercises1",prev:framePtr,filename:"/home/benhodge/personal/nim/nim_basics/exercises1.nim",line:0};
framePtr = F;
framePtr = F.prev;
