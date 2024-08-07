(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const i of l)
      if (i.type === 'childList')
        for (const u of i.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var wa = { exports: {} },
  pl = {},
  Sa = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or = Symbol.for('react.element'),
  Zc = Symbol.for('react.portal'),
  Xc = Symbol.for('react.fragment'),
  Jc = Symbol.for('react.strict_mode'),
  qc = Symbol.for('react.profiler'),
  bc = Symbol.for('react.provider'),
  ef = Symbol.for('react.context'),
  nf = Symbol.for('react.forward_ref'),
  tf = Symbol.for('react.suspense'),
  rf = Symbol.for('react.memo'),
  lf = Symbol.for('react.lazy'),
  lo = Symbol.iterator;
function uf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (lo && e[lo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ka = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Ea = Object.assign,
  xa = {};
function mt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = xa),
    (this.updater = t || ka);
}
mt.prototype.isReactComponent = {};
mt.prototype.setState = function (e, n) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, n, 'setState');
};
mt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ca() {}
Ca.prototype = mt.prototype;
function eu(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = xa),
    (this.updater = t || ka);
}
var nu = (eu.prototype = new Ca());
nu.constructor = eu;
Ea(nu, mt.prototype);
nu.isPureReactComponent = !0;
var io = Array.isArray,
  _a = Object.prototype.hasOwnProperty,
  tu = { current: null },
  Pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Na(e, n, t) {
  var r,
    l = {},
    i = null,
    u = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (u = n.ref),
    n.key !== void 0 && (i = '' + n.key),
    n))
      _a.call(n, r) && !Pa.hasOwnProperty(r) && (l[r] = n[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = t;
  else if (1 < a) {
    for (var o = Array(a), c = 0; c < a; c++) o[c] = arguments[c + 2];
    l.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: or,
    type: e,
    key: i,
    ref: u,
    props: l,
    _owner: tu.current
  };
}
function of(e, n) {
  return {
    $$typeof: or,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}
function ru(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === or;
}
function af(e) {
  var n = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var uo = /\/+/g;
function Ol(e, n) {
  return typeof e == 'object' && e !== null && e.key != null
    ? af('' + e.key)
    : n.toString(36);
}
function Lr(e, n, t, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        u = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case or:
          case Zc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === '' ? '.' + Ol(u, 0) : r),
      io(l)
        ? ((t = ''),
          e != null && (t = e.replace(uo, '$&/') + '/'),
          Lr(l, n, t, '', function (c) {
            return c;
          }))
        : l != null &&
          (ru(l) &&
            (l = of(
              l,
              t +
                (!l.key || (u && u.key === l.key)
                  ? ''
                  : ('' + l.key).replace(uo, '$&/') + '/') +
                e
            )),
          n.push(l)),
      1
    );
  if (((u = 0), (r = r === '' ? '.' : r + ':'), io(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var o = r + Ol(i, a);
      u += Lr(i, n, t, o, l);
    }
  else if (((o = uf(e)), typeof o == 'function'))
    for (e = o.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (o = r + Ol(i, a++)), (u += Lr(i, n, t, o, l));
  else if (i === 'object')
    throw (
      ((n = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (n === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : n) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return u;
}
function pr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, '', '', function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function sf(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Mr = { transition: null },
  cf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: tu
  };
function Ta() {
  throw Error('act(...) is not supported in production builds of React.');
}
O.Children = {
  map: pr,
  forEach: function (e, n, t) {
    pr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      pr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!ru(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  }
};
O.Component = mt;
O.Fragment = Xc;
O.Profiler = qc;
O.PureComponent = eu;
O.StrictMode = Jc;
O.Suspense = tf;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf;
O.act = Ta;
O.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Ea({}, e.props),
    l = e.key,
    i = e.ref,
    u = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (u = tu.current)),
      n.key !== void 0 && (l = '' + n.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in n)
      _a.call(n, o) &&
        !Pa.hasOwnProperty(o) &&
        (r[o] = n[o] === void 0 && a !== void 0 ? a[o] : n[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = t;
  else if (1 < o) {
    a = Array(o);
    for (var c = 0; c < o; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: or, type: e.type, key: l, ref: i, props: r, _owner: u };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: ef,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: bc, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Na;
O.createFactory = function (e) {
  var n = Na.bind(null, e);
  return (n.type = e), n;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
O.isValidElement = ru;
O.lazy = function (e) {
  return { $$typeof: lf, _payload: { _status: -1, _result: e }, _init: sf };
};
O.memo = function (e, n) {
  return { $$typeof: rf, type: e, compare: n === void 0 ? null : n };
};
O.startTransition = function (e) {
  var n = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = n;
  }
};
O.unstable_act = Ta;
O.useCallback = function (e, n) {
  return ce.current.useCallback(e, n);
};
O.useContext = function (e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function (e, n) {
  return ce.current.useEffect(e, n);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (e, n, t) {
  return ce.current.useImperativeHandle(e, n, t);
};
O.useInsertionEffect = function (e, n) {
  return ce.current.useInsertionEffect(e, n);
};
O.useLayoutEffect = function (e, n) {
  return ce.current.useLayoutEffect(e, n);
};
O.useMemo = function (e, n) {
  return ce.current.useMemo(e, n);
};
O.useReducer = function (e, n, t) {
  return ce.current.useReducer(e, n, t);
};
O.useRef = function (e) {
  return ce.current.useRef(e);
};
O.useState = function (e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function (e, n, t) {
  return ce.current.useSyncExternalStore(e, n, t);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = '18.3.1';
Sa.exports = O;
var Ht = Sa.exports;
const ff = Gc(Ht);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var df = Ht,
  pf = Symbol.for('react.element'),
  vf = Symbol.for('react.fragment'),
  hf = Object.prototype.hasOwnProperty,
  mf = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function za(e, n, t) {
  var r,
    l = {},
    i = null,
    u = null;
  t !== void 0 && (i = '' + t),
    n.key !== void 0 && (i = '' + n.key),
    n.ref !== void 0 && (u = n.ref);
  for (r in n) hf.call(n, r) && !gf.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: pf,
    type: e,
    key: i,
    ref: u,
    props: l,
    _owner: mf.current
  };
}
pl.Fragment = vf;
pl.jsx = za;
pl.jsxs = za;
wa.exports = pl;
var Ze = wa.exports,
  ii = {},
  La = { exports: {} },
  ke = {},
  Ma = { exports: {} },
  Oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(x, z) {
    var M = x.length;
    x.push(z);
    e: for (; 0 < M; ) {
      var A = (M - 1) >>> 1,
        K = x[A];
      if (0 < l(K, z)) (x[A] = z), (x[M] = K), (M = A);
      else break e;
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0],
      M = x.pop();
    if (M !== z) {
      x[0] = M;
      e: for (var A = 0, K = x.length, Ae = K >>> 1; A < Ae; ) {
        var $e = 2 * (A + 1) - 1,
          Tn = x[$e],
          Ge = $e + 1,
          dr = x[Ge];
        if (0 > l(Tn, M))
          Ge < K && 0 > l(dr, Tn)
            ? ((x[A] = dr), (x[Ge] = M), (A = Ge))
            : ((x[A] = Tn), (x[$e] = M), (A = $e));
        else if (Ge < K && 0 > l(dr, M)) (x[A] = dr), (x[Ge] = M), (A = Ge);
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var M = x.sortIndex - z.sortIndex;
    return M !== 0 ? M : x.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      a = u.now();
    e.unstable_now = function () {
      return u.now() - a;
    };
  }
  var o = [],
    c = [],
    p = 1,
    v = null,
    h = 3,
    w = !1,
    y = !1,
    m = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    s = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(x) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= x)
        r(c), (z.sortIndex = z.expirationTime), n(o, z);
      else break;
      z = t(c);
    }
  }
  function g(x) {
    if (((m = !1), f(x), !y))
      if (t(o) !== null) (y = !0), St(E);
      else {
        var z = t(c);
        z !== null && Ue(g, z.startTime - x);
      }
  }
  function E(x, z) {
    (y = !1), m && ((m = !1), d(P), (P = -1)), (w = !0);
    var M = h;
    try {
      for (
        f(z), v = t(o);
        v !== null && (!(v.expirationTime > z) || (x && !J()));

      ) {
        var A = v.callback;
        if (typeof A == 'function') {
          (v.callback = null), (h = v.priorityLevel);
          var K = A(v.expirationTime <= z);
          (z = e.unstable_now()),
            typeof K == 'function' ? (v.callback = K) : v === t(o) && r(o),
            f(z);
        } else r(o);
        v = t(o);
      }
      if (v !== null) var Ae = !0;
      else {
        var $e = t(c);
        $e !== null && Ue(g, $e.startTime - z), (Ae = !1);
      }
      return Ae;
    } finally {
      (v = null), (h = M), (w = !1);
    }
  }
  var k = !1,
    _ = null,
    P = -1,
    R = 5,
    N = -1;
  function J() {
    return !(e.unstable_now() - N < R);
  }
  function je() {
    if (_ !== null) {
      var x = e.unstable_now();
      N = x;
      var z = !0;
      try {
        z = _(!0, x);
      } finally {
        z ? ee() : ((k = !1), (_ = null));
      }
    } else k = !1;
  }
  var ee;
  if (typeof s == 'function')
    ee = function () {
      s(je);
    };
  else if (typeof MessageChannel < 'u') {
    var Hn = new MessageChannel(),
      wt = Hn.port2;
    (Hn.port1.onmessage = je),
      (ee = function () {
        wt.postMessage(null);
      });
  } else
    ee = function () {
      L(je, 0);
    };
  function St(x) {
    (_ = x), k || ((k = !0), ee());
  }
  function Ue(x, z) {
    P = L(function () {
      x(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), St(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (R = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(o);
    }),
    (e.unstable_next = function (x) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var M = h;
      h = z;
      try {
        return x();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, z) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var M = h;
      h = x;
      try {
        return z();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (x, z, M) {
      var A = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? A + M : A))
          : (M = A),
        x)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = M + K),
        (x = {
          id: p++,
          callback: z,
          priorityLevel: x,
          startTime: M,
          expirationTime: K,
          sortIndex: -1
        }),
        M > A
          ? ((x.sortIndex = M),
            n(c, x),
            t(o) === null &&
              x === t(c) &&
              (m ? (d(P), (P = -1)) : (m = !0), Ue(g, M - A)))
          : ((x.sortIndex = K), n(o, x), y || w || ((y = !0), St(E))),
        x
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (x) {
      var z = h;
      return function () {
        var M = h;
        h = z;
        try {
          return x.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(Oa);
Ma.exports = Oa;
var yf = Ma.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = Ht,
  Se = yf;
function S(e) {
  for (
    var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, t = 1;
    t < arguments.length;
    t++
  )
    n += '&args[]=' + encodeURIComponent(arguments[t]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    n +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Da = new Set(),
  Wt = {};
function Vn(e, n) {
  st(e, n), st(e + 'Capture', n);
}
function st(e, n) {
  for (Wt[e] = n, e = 0; e < n.length; e++) Da.add(n[e]);
}
var tn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ui = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  oo = {},
  ao = {};
function kf(e) {
  return ui.call(ao, e)
    ? !0
    : ui.call(oo, e)
    ? !1
    : Sf.test(e)
    ? (ao[e] = !0)
    : ((oo[e] = !0), !1);
}
function Ef(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function xf(e, n, t, r) {
  if (n === null || typeof n > 'u' || Ef(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function fe(e, n, t, r, l, i, u) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var re = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var n = e[0];
  re[n] = new fe(n, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function iu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(lu, iu);
    re[n] = new fe(n, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(lu, iu);
    re[n] = new fe(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var n = e.replace(lu, iu);
  re[n] = new fe(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uu(e, n, t, r) {
  var l = re.hasOwnProperty(n) ? re[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== 'o' && n[0] !== 'O') ||
      (n[1] !== 'n' && n[1] !== 'N')) &&
    (xf(n, t, l, r) && (t = null),
    r || l === null
      ? kf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : '') : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? '' : '' + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var on = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vr = Symbol.for('react.element'),
  Qn = Symbol.for('react.portal'),
  Kn = Symbol.for('react.fragment'),
  ou = Symbol.for('react.strict_mode'),
  oi = Symbol.for('react.profiler'),
  Ia = Symbol.for('react.provider'),
  Ra = Symbol.for('react.context'),
  au = Symbol.for('react.forward_ref'),
  ai = Symbol.for('react.suspense'),
  si = Symbol.for('react.suspense_list'),
  su = Symbol.for('react.memo'),
  sn = Symbol.for('react.lazy'),
  Fa = Symbol.for('react.offscreen'),
  so = Symbol.iterator;
function kt(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (so && e[so]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var H = Object.assign,
  Dl;
function zt(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Dl = (n && n[1]) || '';
    }
  return (
    `
` +
    Dl +
    e
  );
}
var Il = !1;
function Rl(e, n) {
  if (!e || Il) return '';
  Il = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          u = l.length - 1,
          a = i.length - 1;
        1 <= u && 0 <= a && l[u] !== i[a];

      )
        a--;
      for (; 1 <= u && 0 <= a; u--, a--)
        if (l[u] !== i[a]) {
          if (u !== 1 || a !== 1)
            do
              if ((u--, a--, 0 > a || l[u] !== i[a])) {
                var o =
                  `
` + l[u].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    o.includes('<anonymous>') &&
                    (o = o.replace('<anonymous>', e.displayName)),
                  o
                );
              }
            while (1 <= u && 0 <= a);
          break;
        }
    }
  } finally {
    (Il = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : '') ? zt(e) : '';
}
function Cf(e) {
  switch (e.tag) {
    case 5:
      return zt(e.type);
    case 16:
      return zt('Lazy');
    case 13:
      return zt('Suspense');
    case 19:
      return zt('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Rl(e.type, !1)), e;
    case 11:
      return (e = Rl(e.type.render, !1)), e;
    case 1:
      return (e = Rl(e.type, !0)), e;
    default:
      return '';
  }
}
function ci(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Kn:
      return 'Fragment';
    case Qn:
      return 'Portal';
    case oi:
      return 'Profiler';
    case ou:
      return 'StrictMode';
    case ai:
      return 'Suspense';
    case si:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ra:
        return (e.displayName || 'Context') + '.Consumer';
      case Ia:
        return (e._context.displayName || 'Context') + '.Provider';
      case au:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case su:
        return (
          (n = e.displayName || null), n !== null ? n : ci(e.type) || 'Memo'
        );
      case sn:
        (n = e._payload), (e = e._init);
        try {
          return ci(e(n));
        } catch {}
    }
  return null;
}
function _f(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (n.displayName || 'Context') + '.Consumer';
    case 10:
      return (n._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ''),
        n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return n;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ci(n);
    case 8:
      return n === ou ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == 'function') return n.displayName || n.name || null;
      if (typeof n == 'string') return n;
  }
  return null;
}
function xn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function ja(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (n === 'checkbox' || n === 'radio')
  );
}
function Pf(e) {
  var n = ja(e) ? 'checked' : 'value',
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = '' + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < 'u' &&
    typeof t.get == 'function' &&
    typeof t.set == 'function'
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = '' + u), i.call(this, u);
        }
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = '' + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        }
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = Pf(e));
}
function Ua(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = '';
  return (
    e && (r = ja(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Br(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fi(e, n) {
  var t = n.checked;
  return H({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked
  });
}
function co(e, n) {
  var t = n.defaultValue == null ? '' : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = xn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === 'checkbox' || n.type === 'radio'
          ? n.checked != null
          : n.value != null
    });
}
function Aa(e, n) {
  (n = n.checked), n != null && uu(e, 'checked', n, !1);
}
function di(e, n) {
  Aa(e, n);
  var t = xn(n.value),
    r = n.type;
  if (t != null)
    r === 'number'
      ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
      : e.value !== '' + t && (e.value = '' + t);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  n.hasOwnProperty('value')
    ? pi(e, n.type, t)
    : n.hasOwnProperty('defaultValue') && pi(e, n.type, xn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function fo(e, n, t) {
  if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
    var r = n.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = '' + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== '' && (e.name = t);
}
function pi(e, n, t) {
  (n !== 'number' || Br(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
}
var Lt = Array.isArray;
function rt(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty('$' + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = '' + xn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function vi(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(S(91));
  return H({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  });
}
function po(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(S(92));
      if (Lt(t)) {
        if (1 < t.length) throw Error(S(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ''), (t = n);
  }
  e._wrapperState = { initialValue: xn(t) };
}
function $a(e, n) {
  var t = xn(n.value),
    r = xn(n.defaultValue);
  t != null &&
    ((t = '' + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = '' + r);
}
function vo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
}
function Va(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function hi(e, n) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Va(n)
    : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var mr,
  Ba = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = n;
    else {
      for (
        mr = mr || document.createElement('div'),
          mr.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
          n = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Qt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Dt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Nf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Dt).forEach(function (e) {
  Nf.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Dt[n] = Dt[e]);
  });
});
function Ha(e, n, t) {
  return n == null || typeof n == 'boolean' || n === ''
    ? ''
    : t || typeof n != 'number' || n === 0 || (Dt.hasOwnProperty(e) && Dt[e])
    ? ('' + n).trim()
    : n + 'px';
}
function Wa(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf('--') === 0,
        l = Ha(t, n[t], r);
      t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Tf = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function mi(e, n) {
  if (n) {
    if (Tf[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(S(60));
      if (
        typeof n.dangerouslySetInnerHTML != 'object' ||
        !('__html' in n.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (n.style != null && typeof n.style != 'object') throw Error(S(62));
  }
}
function gi(e, n) {
  if (e.indexOf('-') === -1) return typeof n.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var yi = null;
function cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wi = null,
  lt = null,
  it = null;
function ho(e) {
  if ((e = cr(e))) {
    if (typeof wi != 'function') throw Error(S(280));
    var n = e.stateNode;
    n && ((n = yl(n)), wi(e.stateNode, e.type, n));
  }
}
function Qa(e) {
  lt ? (it ? it.push(e) : (it = [e])) : (lt = e);
}
function Ka() {
  if (lt) {
    var e = lt,
      n = it;
    if (((it = lt = null), ho(e), n)) for (e = 0; e < n.length; e++) ho(n[e]);
  }
}
function Ya(e, n) {
  return e(n);
}
function Ga() {}
var Fl = !1;
function Za(e, n, t) {
  if (Fl) return e(n, t);
  Fl = !0;
  try {
    return Ya(e, n, t);
  } finally {
    (Fl = !1), (lt !== null || it !== null) && (Ga(), Ka());
  }
}
function Kt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = yl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != 'function') throw Error(S(231, n, typeof t));
  return t;
}
var Si = !1;
if (tn)
  try {
    var Et = {};
    Object.defineProperty(Et, 'passive', {
      get: function () {
        Si = !0;
      }
    }),
      window.addEventListener('test', Et, Et),
      window.removeEventListener('test', Et, Et);
  } catch {
    Si = !1;
  }
function zf(e, n, t, r, l, i, u, a, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (p) {
    this.onError(p);
  }
}
var It = !1,
  Hr = null,
  Wr = !1,
  ki = null,
  Lf = {
    onError: function (e) {
      (It = !0), (Hr = e);
    }
  };
function Mf(e, n, t, r, l, i, u, a, o) {
  (It = !1), (Hr = null), zf.apply(Lf, arguments);
}
function Of(e, n, t, r, l, i, u, a, o) {
  if ((Mf.apply(this, arguments), It)) {
    if (It) {
      var c = Hr;
      (It = !1), (Hr = null);
    } else throw Error(S(198));
    Wr || ((Wr = !0), (ki = c));
  }
}
function Bn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Xa(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function mo(e) {
  if (Bn(e) !== e) throw Error(S(188));
}
function Df(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Bn(e)), n === null)) throw Error(S(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return mo(l), e;
        if (i === r) return mo(l), n;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var u = !1, a = l.child; a; ) {
        if (a === t) {
          (u = !0), (t = l), (r = i);
          break;
        }
        if (a === r) {
          (u = !0), (r = l), (t = i);
          break;
        }
        a = a.sibling;
      }
      if (!u) {
        for (a = i.child; a; ) {
          if (a === t) {
            (u = !0), (t = i), (r = l);
            break;
          }
          if (a === r) {
            (u = !0), (r = i), (t = l);
            break;
          }
          a = a.sibling;
        }
        if (!u) throw Error(S(189));
      }
    }
    if (t.alternate !== r) throw Error(S(190));
  }
  if (t.tag !== 3) throw Error(S(188));
  return t.stateNode.current === t ? e : n;
}
function Ja(e) {
  return (e = Df(e)), e !== null ? qa(e) : null;
}
function qa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = qa(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var ba = Se.unstable_scheduleCallback,
  go = Se.unstable_cancelCallback,
  If = Se.unstable_shouldYield,
  Rf = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Ff = Se.unstable_getCurrentPriorityLevel,
  fu = Se.unstable_ImmediatePriority,
  es = Se.unstable_UserBlockingPriority,
  Qr = Se.unstable_NormalPriority,
  jf = Se.unstable_LowPriority,
  ns = Se.unstable_IdlePriority,
  vl = null,
  Ke = null;
function Uf(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == 'function')
    try {
      Ke.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Vf,
  Af = Math.log,
  $f = Math.LN2;
function Vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Af(e) / $f) | 0)) | 0;
}
var gr = 64,
  yr = 4194304;
function Mt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    u = t & 268435455;
  if (u !== 0) {
    var a = u & ~l;
    a !== 0 ? (r = Mt(a)) : ((i &= u), i !== 0 && (r = Mt(i)));
  } else (u = t & ~l), u !== 0 ? (r = Mt(u)) : i !== 0 && (r = Mt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Ie(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Bf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Ie(i),
      a = 1 << u,
      o = l[u];
    o === -1
      ? (!(a & t) || a & r) && (l[u] = Bf(a, n))
      : o <= n && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Ei(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ts() {
  var e = gr;
  return (gr <<= 1), !(gr & 4194240) && (gr = 64), e;
}
function jl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function ar(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Ie(n)),
    (e[n] = t);
}
function Wf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Ie(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function du(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Ie(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var I = 0;
function rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ls,
  pu,
  is,
  us,
  os,
  xi = !1,
  wr = [],
  hn = null,
  mn = null,
  gn = null,
  Yt = new Map(),
  Gt = new Map(),
  fn = [],
  Qf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function yo(e, n) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      hn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      mn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      gn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Yt.delete(n.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Gt.delete(n.pointerId);
  }
}
function xt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
      }),
      n !== null && ((n = cr(n)), n !== null && pu(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function Kf(e, n, t, r, l) {
  switch (n) {
    case 'focusin':
      return (hn = xt(hn, e, n, t, r, l)), !0;
    case 'dragenter':
      return (mn = xt(mn, e, n, t, r, l)), !0;
    case 'mouseover':
      return (gn = xt(gn, e, n, t, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Yt.set(i, xt(Yt.get(i) || null, e, n, t, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Gt.set(i, xt(Gt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function as(e) {
  var n = Mn(e.target);
  if (n !== null) {
    var t = Bn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Xa(t)), n !== null)) {
          (e.blockedOn = n),
            os(e.priority, function () {
              is(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Or(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = Ci(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (yi = r), t.target.dispatchEvent(r), (yi = null);
    } else return (n = cr(t)), n !== null && pu(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function wo(e, n, t) {
  Or(e) && t.delete(n);
}
function Yf() {
  (xi = !1),
    hn !== null && Or(hn) && (hn = null),
    mn !== null && Or(mn) && (mn = null),
    gn !== null && Or(gn) && (gn = null),
    Yt.forEach(wo),
    Gt.forEach(wo);
}
function Ct(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    xi ||
      ((xi = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Yf)));
}
function Zt(e) {
  function n(l) {
    return Ct(l, e);
  }
  if (0 < wr.length) {
    Ct(wr[0], e);
    for (var t = 1; t < wr.length; t++) {
      var r = wr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    hn !== null && Ct(hn, e),
      mn !== null && Ct(mn, e),
      gn !== null && Ct(gn, e),
      Yt.forEach(n),
      Gt.forEach(n),
      t = 0;
    t < fn.length;
    t++
  )
    (r = fn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fn.length && ((t = fn[0]), t.blockedOn === null); )
    as(t), t.blockedOn === null && fn.shift();
}
var ut = on.ReactCurrentBatchConfig,
  Yr = !0;
function Gf(e, n, t, r) {
  var l = I,
    i = ut.transition;
  ut.transition = null;
  try {
    (I = 1), vu(e, n, t, r);
  } finally {
    (I = l), (ut.transition = i);
  }
}
function Zf(e, n, t, r) {
  var l = I,
    i = ut.transition;
  ut.transition = null;
  try {
    (I = 4), vu(e, n, t, r);
  } finally {
    (I = l), (ut.transition = i);
  }
}
function vu(e, n, t, r) {
  if (Yr) {
    var l = Ci(e, n, t, r);
    if (l === null) Yl(e, n, r, Gr, t), yo(e, r);
    else if (Kf(l, e, n, t, r)) r.stopPropagation();
    else if ((yo(e, r), n & 4 && -1 < Qf.indexOf(e))) {
      for (; l !== null; ) {
        var i = cr(l);
        if (
          (i !== null && ls(i),
          (i = Ci(e, n, t, r)),
          i === null && Yl(e, n, r, Gr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, n, r, null, t);
  }
}
var Gr = null;
function Ci(e, n, t, r) {
  if (((Gr = null), (e = cu(r)), (e = Mn(e)), e !== null))
    if (((n = Bn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Xa(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Gr = e), null;
}
function ss(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Ff()) {
        case fu:
          return 1;
        case es:
          return 4;
        case Qr:
        case jf:
          return 16;
        case ns:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pn = null,
  hu = null,
  Dr = null;
function cs() {
  if (Dr) return Dr;
  var e,
    n = hu,
    t = n.length,
    r,
    l = 'value' in pn ? pn.value : pn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[i - r]; r++);
  return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var n = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sr() {
  return !0;
}
function So() {
  return !1;
}
function Ee(e) {
  function n(t, r, l, i, u) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Sr
        : So),
      (this.isPropagationStopped = So),
      this
    );
  }
  return (
    H(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
          (this.isDefaultPrevented = Sr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
          (this.isPropagationStopped = Sr));
      },
      persist: function () {},
      isPersistent: Sr
    }),
    n
  );
}
var gt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  mu = Ee(gt),
  sr = H({}, gt, { view: 0, detail: 0 }),
  Xf = Ee(sr),
  Ul,
  Al,
  _t,
  hl = H({}, sr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== _t &&
            (_t && e.type === 'mousemove'
              ? ((Ul = e.screenX - _t.screenX), (Al = e.screenY - _t.screenY))
              : (Al = Ul = 0),
            (_t = e)),
          Ul);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Al;
    }
  }),
  ko = Ee(hl),
  Jf = H({}, hl, { dataTransfer: 0 }),
  qf = Ee(Jf),
  bf = H({}, sr, { relatedTarget: 0 }),
  $l = Ee(bf),
  ed = H({}, gt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nd = Ee(ed),
  td = H({}, gt, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    }
  }),
  rd = Ee(td),
  ld = H({}, gt, { data: 0 }),
  Eo = Ee(ld),
  id = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  ud = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  od = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  };
function ad(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = od[e]) ? !!n[e] : !1;
}
function gu() {
  return ad;
}
var sd = H({}, sr, {
    key: function (e) {
      if (e.key) {
        var n = id[e.key] || e.key;
        if (n !== 'Unidentified') return n;
      }
      return e.type === 'keypress'
        ? ((e = Ir(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ud[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function (e) {
      return e.type === 'keypress' ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ir(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    }
  }),
  cd = Ee(sd),
  fd = H({}, hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  xo = Ee(fd),
  dd = H({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu
  }),
  pd = Ee(dd),
  vd = H({}, gt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hd = Ee(vd),
  md = H({}, hl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  gd = Ee(md),
  yd = [9, 13, 27, 32],
  yu = tn && 'CompositionEvent' in window,
  Rt = null;
tn && 'documentMode' in document && (Rt = document.documentMode);
var wd = tn && 'TextEvent' in window && !Rt,
  fs = tn && (!yu || (Rt && 8 < Rt && 11 >= Rt)),
  Co = ' ',
  _o = !1;
function ds(e, n) {
  switch (e) {
    case 'keyup':
      return yd.indexOf(n.keyCode) !== -1;
    case 'keydown':
      return n.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ps(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Yn = !1;
function Sd(e, n) {
  switch (e) {
    case 'compositionend':
      return ps(n);
    case 'keypress':
      return n.which !== 32 ? null : ((_o = !0), Co);
    case 'textInput':
      return (e = n.data), e === Co && _o ? null : e;
    default:
      return null;
  }
}
function kd(e, n) {
  if (Yn)
    return e === 'compositionend' || (!yu && ds(e, n))
      ? ((e = cs()), (Dr = hu = pn = null), (Yn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case 'compositionend':
      return fs && n.locale !== 'ko' ? null : n.data;
    default:
      return null;
  }
}
var Ed = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Po(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === 'input' ? !!Ed[e.type] : n === 'textarea';
}
function vs(e, n, t, r) {
  Qa(r),
    (n = Zr(n, 'onChange')),
    0 < n.length &&
      ((t = new mu('onChange', 'change', null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Ft = null,
  Xt = null;
function xd(e) {
  _s(e, 0);
}
function ml(e) {
  var n = Xn(e);
  if (Ua(n)) return e;
}
function Cd(e, n) {
  if (e === 'change') return n;
}
var hs = !1;
if (tn) {
  var Vl;
  if (tn) {
    var Bl = 'oninput' in document;
    if (!Bl) {
      var No = document.createElement('div');
      No.setAttribute('oninput', 'return;'),
        (Bl = typeof No.oninput == 'function');
    }
    Vl = Bl;
  } else Vl = !1;
  hs = Vl && (!document.documentMode || 9 < document.documentMode);
}
function To() {
  Ft && (Ft.detachEvent('onpropertychange', ms), (Xt = Ft = null));
}
function ms(e) {
  if (e.propertyName === 'value' && ml(Xt)) {
    var n = [];
    vs(n, Xt, e, cu(e)), Za(xd, n);
  }
}
function _d(e, n, t) {
  e === 'focusin'
    ? (To(), (Ft = n), (Xt = t), Ft.attachEvent('onpropertychange', ms))
    : e === 'focusout' && To();
}
function Pd(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ml(Xt);
}
function Nd(e, n) {
  if (e === 'click') return ml(n);
}
function Td(e, n) {
  if (e === 'input' || e === 'change') return ml(n);
}
function zd(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Fe = typeof Object.is == 'function' ? Object.is : zd;
function Jt(e, n) {
  if (Fe(e, n)) return !0;
  if (typeof e != 'object' || e === null || typeof n != 'object' || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!ui.call(n, l) || !Fe(e[l], n[l])) return !1;
  }
  return !0;
}
function zo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lo(e, n) {
  var t = zo(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = zo(t);
  }
}
function gs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? gs(e, n.parentNode)
      : 'contains' in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function ys() {
  for (var e = window, n = Br(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == 'string';
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Br(e.document);
  }
  return n;
}
function wu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      n === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ld(e) {
  var n = ys(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    gs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && wu(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        'selectionStart' in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Lo(t, i));
        var u = Lo(t, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Md = tn && 'documentMode' in document && 11 >= document.documentMode,
  Gn = null,
  _i = null,
  jt = null,
  Pi = !1;
function Mo(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Pi ||
    Gn == null ||
    Gn !== Br(r) ||
    ((r = Gn),
    'selectionStart' in r && wu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (jt && Jt(jt, r)) ||
      ((jt = r),
      (r = Zr(_i, 'onSelect')),
      0 < r.length &&
        ((n = new mu('onSelect', 'select', null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Gn))));
}
function kr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t['Webkit' + e] = 'webkit' + n),
    (t['Moz' + e] = 'moz' + n),
    t
  );
}
var Zn = {
    animationend: kr('Animation', 'AnimationEnd'),
    animationiteration: kr('Animation', 'AnimationIteration'),
    animationstart: kr('Animation', 'AnimationStart'),
    transitionend: kr('Transition', 'TransitionEnd')
  },
  Hl = {},
  ws = {};
tn &&
  ((ws = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  'TransitionEvent' in window || delete Zn.transitionend.transition);
function gl(e) {
  if (Hl[e]) return Hl[e];
  if (!Zn[e]) return e;
  var n = Zn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in ws) return (Hl[e] = n[t]);
  return e;
}
var Ss = gl('animationend'),
  ks = gl('animationiteration'),
  Es = gl('animationstart'),
  xs = gl('transitionend'),
  Cs = new Map(),
  Oo =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function _n(e, n) {
  Cs.set(e, n), Vn(n, [e]);
}
for (var Wl = 0; Wl < Oo.length; Wl++) {
  var Ql = Oo[Wl],
    Od = Ql.toLowerCase(),
    Dd = Ql[0].toUpperCase() + Ql.slice(1);
  _n(Od, 'on' + Dd);
}
_n(Ss, 'onAnimationEnd');
_n(ks, 'onAnimationIteration');
_n(Es, 'onAnimationStart');
_n('dblclick', 'onDoubleClick');
_n('focusin', 'onFocus');
_n('focusout', 'onBlur');
_n(xs, 'onTransitionEnd');
st('onMouseEnter', ['mouseout', 'mouseover']);
st('onMouseLeave', ['mouseout', 'mouseover']);
st('onPointerEnter', ['pointerout', 'pointerover']);
st('onPointerLeave', ['pointerout', 'pointerover']);
Vn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Vn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Vn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Vn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Vn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Vn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ot =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Id = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ot));
function Do(e, n, t) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = t), Of(r, n, void 0, e), (e.currentTarget = null);
}
function _s(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var a = r[u],
            o = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), o !== i && l.isPropagationStopped())) break e;
          Do(l, a, c), (i = o);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((a = r[u]),
            (o = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            o !== i && l.isPropagationStopped())
          )
            break e;
          Do(l, a, c), (i = o);
        }
    }
  }
  if (Wr) throw ((e = ki), (Wr = !1), (ki = null), e);
}
function j(e, n) {
  var t = n[Mi];
  t === void 0 && (t = n[Mi] = new Set());
  var r = e + '__bubble';
  t.has(r) || (Ps(n, e, 2, !1), t.add(r));
}
function Kl(e, n, t) {
  var r = 0;
  n && (r |= 4), Ps(t, e, r, n);
}
var Er = '_reactListening' + Math.random().toString(36).slice(2);
function qt(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Da.forEach(function (t) {
        t !== 'selectionchange' && (Id.has(t) || Kl(t, !1, e), Kl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Er] || ((n[Er] = !0), Kl('selectionchange', !1, n));
  }
}
function Ps(e, n, t, r) {
  switch (ss(n)) {
    case 1:
      var l = Gf;
      break;
    case 4:
      l = Zf;
      break;
    default:
      l = vu;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !Si ||
      (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Yl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var o = u.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = u.stateNode.containerInfo),
              o === l || (o.nodeType === 8 && o.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; a !== null; ) {
          if (((u = Mn(a)), u === null)) return;
          if (((o = u.tag), o === 5 || o === 6)) {
            r = i = u;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Za(function () {
    var c = i,
      p = cu(t),
      v = [];
    e: {
      var h = Cs.get(e);
      if (h !== void 0) {
        var w = mu,
          y = e;
        switch (e) {
          case 'keypress':
            if (Ir(t) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = cd;
            break;
          case 'focusin':
            (y = 'focus'), (w = $l);
            break;
          case 'focusout':
            (y = 'blur'), (w = $l);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = $l;
            break;
          case 'click':
            if (t.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = ko;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = qf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = pd;
            break;
          case Ss:
          case ks:
          case Es:
            w = nd;
            break;
          case xs:
            w = hd;
            break;
          case 'scroll':
            w = Xf;
            break;
          case 'wheel':
            w = gd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = rd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = xo;
        }
        var m = (n & 4) !== 0,
          L = !m && e === 'scroll',
          d = m ? (h !== null ? h + 'Capture' : null) : h;
        m = [];
        for (var s = c, f; s !== null; ) {
          f = s;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = Kt(s, d)), g != null && m.push(bt(s, g, f)))),
            L)
          )
            break;
          s = s.return;
        }
        0 < m.length &&
          ((h = new w(h, y, null, t, p)), v.push({ event: h, listeners: m }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          h &&
            t !== yi &&
            (y = t.relatedTarget || t.fromElement) &&
            (Mn(y) || y[rn]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          w
            ? ((y = t.relatedTarget || t.toElement),
              (w = c),
              (y = y ? Mn(y) : null),
              y !== null &&
                ((L = Bn(y)), y !== L || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = c)),
          w !== y)
        ) {
          if (
            ((m = ko),
            (g = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (s = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = xo),
              (g = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (s = 'pointer')),
            (L = w == null ? h : Xn(w)),
            (f = y == null ? h : Xn(y)),
            (h = new m(g, s + 'leave', w, t, p)),
            (h.target = L),
            (h.relatedTarget = f),
            (g = null),
            Mn(p) === c &&
              ((m = new m(d, s + 'enter', y, t, p)),
              (m.target = f),
              (m.relatedTarget = L),
              (g = m)),
            (L = g),
            w && y)
          )
            n: {
              for (m = w, d = y, s = 0, f = m; f; f = Wn(f)) s++;
              for (f = 0, g = d; g; g = Wn(g)) f++;
              for (; 0 < s - f; ) (m = Wn(m)), s--;
              for (; 0 < f - s; ) (d = Wn(d)), f--;
              for (; s--; ) {
                if (m === d || (d !== null && m === d.alternate)) break n;
                (m = Wn(m)), (d = Wn(d));
              }
              m = null;
            }
          else m = null;
          w !== null && Io(v, h, w, m, !1),
            y !== null && L !== null && Io(v, L, y, m, !0);
        }
      }
      e: {
        if (
          ((h = c ? Xn(c) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && h.type === 'file'))
        )
          var E = Cd;
        else if (Po(h))
          if (hs) E = Td;
          else {
            E = Pd;
            var k = _d;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (E = Nd);
        if (E && (E = E(e, c))) {
          vs(v, E, t, p);
          break e;
        }
        k && k(e, h, c),
          e === 'focusout' &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === 'number' &&
            pi(h, 'number', h.value);
      }
      switch (((k = c ? Xn(c) : window), e)) {
        case 'focusin':
          (Po(k) || k.contentEditable === 'true') &&
            ((Gn = k), (_i = c), (jt = null));
          break;
        case 'focusout':
          jt = _i = Gn = null;
          break;
        case 'mousedown':
          Pi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Pi = !1), Mo(v, t, p);
          break;
        case 'selectionchange':
          if (Md) break;
        case 'keydown':
        case 'keyup':
          Mo(v, t, p);
      }
      var _;
      if (yu)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        Yn
          ? ds(e, t) && (P = 'onCompositionEnd')
          : e === 'keydown' && t.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (fs &&
          t.locale !== 'ko' &&
          (Yn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Yn && (_ = cs())
            : ((pn = p),
              (hu = 'value' in pn ? pn.value : pn.textContent),
              (Yn = !0))),
        (k = Zr(c, P)),
        0 < k.length &&
          ((P = new Eo(P, e, null, t, p)),
          v.push({ event: P, listeners: k }),
          _ ? (P.data = _) : ((_ = ps(t)), _ !== null && (P.data = _)))),
        (_ = wd ? Sd(e, t) : kd(e, t)) &&
          ((c = Zr(c, 'onBeforeInput')),
          0 < c.length &&
            ((p = new Eo('onBeforeInput', 'beforeinput', null, t, p)),
            v.push({ event: p, listeners: c }),
            (p.data = _)));
    }
    _s(v, n);
  });
}
function bt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Zr(e, n) {
  for (var t = n + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Kt(e, t)),
      i != null && r.unshift(bt(e, i, l)),
      (i = Kt(e, n)),
      i != null && r.push(bt(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Io(e, n, t, r, l) {
  for (var i = n._reactName, u = []; t !== null && t !== r; ) {
    var a = t,
      o = a.alternate,
      c = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((o = Kt(t, i)), o != null && u.unshift(bt(t, o, a)))
        : l || ((o = Kt(t, i)), o != null && u.push(bt(t, o, a)))),
      (t = t.return);
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var Rd = /\r\n?/g,
  Fd = /\u0000|\uFFFD/g;
function Ro(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Rd,
      `
`
    )
    .replace(Fd, '');
}
function xr(e, n, t) {
  if (((n = Ro(n)), Ro(e) !== n && t)) throw Error(S(425));
}
function Xr() {}
var Ni = null,
  Ti = null;
function zi(e, n) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof n.children == 'string' ||
    typeof n.children == 'number' ||
    (typeof n.dangerouslySetInnerHTML == 'object' &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Li = typeof setTimeout == 'function' ? setTimeout : void 0,
  jd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fo = typeof Promise == 'function' ? Promise : void 0,
  Ud =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fo < 'u'
      ? function (e) {
          return Fo.resolve(null).then(e).catch(Ad);
        }
      : Li;
function Ad(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === '/$')) {
        if (r === 0) {
          e.removeChild(l), Zt(n);
          return;
        }
        r--;
      } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
    t = l;
  } while (t);
  Zt(n);
}
function yn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
      if (n === '/$') return null;
    }
  }
  return e;
}
function jo(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === '$' || t === '$!' || t === '$?') {
        if (n === 0) return e;
        n--;
      } else t === '/$' && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yt = Math.random().toString(36).slice(2),
  He = '__reactFiber$' + yt,
  er = '__reactProps$' + yt,
  rn = '__reactContainer$' + yt,
  Mi = '__reactEvents$' + yt,
  $d = '__reactListeners$' + yt,
  Vd = '__reactHandles$' + yt;
function Mn(e) {
  var n = e[He];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[rn] || t[He])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = jo(e); e !== null; ) {
          if ((t = e[He])) return t;
          e = jo(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[He] || e[rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function yl(e) {
  return e[er] || null;
}
var Oi = [],
  Jn = -1;
function Pn(e) {
  return { current: e };
}
function U(e) {
  0 > Jn || ((e.current = Oi[Jn]), (Oi[Jn] = null), Jn--);
}
function F(e, n) {
  Jn++, (Oi[Jn] = e.current), (e.current = n);
}
var Cn = {},
  oe = Pn(Cn),
  ve = Pn(!1),
  Fn = Cn;
function ct(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Jr() {
  U(ve), U(oe);
}
function Uo(e, n, t) {
  if (oe.current !== Cn) throw Error(S(168));
  F(oe, n), F(ve, t);
}
function Ns(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(S(108, _f(e) || 'Unknown', l));
  return H({}, t, r);
}
function qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cn),
    (Fn = oe.current),
    F(oe, e),
    F(ve, ve.current),
    !0
  );
}
function Ao(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  t
    ? ((e = Ns(e, n, Fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ve),
      U(oe),
      F(oe, e))
    : U(ve),
    F(ve, t);
}
var Je = null,
  wl = !1,
  Zl = !1;
function Ts(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
function Bd(e) {
  (wl = !0), Ts(e);
}
function Nn() {
  if (!Zl && Je !== null) {
    Zl = !0;
    var e = 0,
      n = I;
    try {
      var t = Je;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Je = null), (wl = !1);
    } catch (l) {
      throw (Je !== null && (Je = Je.slice(e + 1)), ba(fu, Nn), l);
    } finally {
      (I = n), (Zl = !1);
    }
  }
  return null;
}
var qn = [],
  bn = 0,
  br = null,
  el = 0,
  xe = [],
  Ce = 0,
  jn = null,
  qe = 1,
  be = '';
function zn(e, n) {
  (qn[bn++] = el), (qn[bn++] = br), (br = e), (el = n);
}
function zs(e, n, t) {
  (xe[Ce++] = qe), (xe[Ce++] = be), (xe[Ce++] = jn), (jn = e);
  var r = qe;
  e = be;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Ie(n) + l;
  if (30 < i) {
    var u = l - (l % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (qe = (1 << (32 - Ie(n) + l)) | (t << l) | r),
      (be = i + e);
  } else (qe = (1 << i) | (t << l) | r), (be = e);
}
function Su(e) {
  e.return !== null && (zn(e, 1), zs(e, 1, 0));
}
function ku(e) {
  for (; e === br; )
    (br = qn[--bn]), (qn[bn] = null), (el = qn[--bn]), (qn[bn] = null);
  for (; e === jn; )
    (jn = xe[--Ce]),
      (xe[Ce] = null),
      (be = xe[--Ce]),
      (xe[Ce] = null),
      (qe = xe[--Ce]),
      (xe[Ce] = null);
}
var we = null,
  ye = null,
  $ = !1,
  Oe = null;
function Ls(e, n) {
  var t = _e(5, null, null, 0);
  (t.elementType = 'DELETED'),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function $o(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (we = e), (ye = yn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = jn !== null ? { id: qe, overflow: be } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824
            }),
            (t = _e(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Di(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if ($) {
    var n = ye;
    if (n) {
      var t = n;
      if (!$o(e, n)) {
        if (Di(e)) throw Error(S(418));
        n = yn(t.nextSibling);
        var r = we;
        n && $o(e, n)
          ? Ls(r, t)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
      }
    } else {
      if (Di(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e);
    }
  }
}
function Vo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Cr(e) {
  if (e !== we) return !1;
  if (!$) return Vo(e), ($ = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== 'head' && n !== 'body' && !zi(e.type, e.memoizedProps))),
    n && (n = ye))
  ) {
    if (Di(e)) throw (Ms(), Error(S(418)));
    for (; n; ) Ls(e, n), (n = yn(n.nextSibling));
  }
  if ((Vo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === '/$') {
            if (n === 0) {
              ye = yn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== '$' && t !== '$!' && t !== '$?') || n++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? yn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ms() {
  for (var e = ye; e; ) e = yn(e.nextSibling);
}
function ft() {
  (ye = we = null), ($ = !1);
}
function Eu(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Hd = on.ReactCurrentBatchConfig;
function Pt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(S(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = '' + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == 'function' &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (u) {
            var a = l.refs;
            u === null ? delete a[i] : (a[i] = u);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != 'string') throw Error(S(284));
    if (!t._owner) throw Error(S(290, e));
  }
  return e;
}
function _r(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      S(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(n).join(', ') + '}'
          : e
      )
    ))
  );
}
function Bo(e) {
  var n = e._init;
  return n(e._payload);
}
function Os(e) {
  function n(d, s) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [s]), (d.flags |= 16)) : f.push(s);
    }
  }
  function t(d, s) {
    if (!e) return null;
    for (; s !== null; ) n(d, s), (s = s.sibling);
    return null;
  }
  function r(d, s) {
    for (d = new Map(); s !== null; )
      s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling);
    return d;
  }
  function l(d, s) {
    return (d = En(d, s)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, s, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < s ? ((d.flags |= 2), s) : f)
            : ((d.flags |= 2), s))
        : ((d.flags |= 1048576), s)
    );
  }
  function u(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, s, f, g) {
    return s === null || s.tag !== 6
      ? ((s = ti(f, d.mode, g)), (s.return = d), s)
      : ((s = l(s, f)), (s.return = d), s);
  }
  function o(d, s, f, g) {
    var E = f.type;
    return E === Kn
      ? p(d, s, f.props.children, g, f.key)
      : s !== null &&
        (s.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === sn &&
            Bo(E) === s.type))
      ? ((g = l(s, f.props)), (g.ref = Pt(d, s, f)), (g.return = d), g)
      : ((g = Vr(f.type, f.key, f.props, null, d.mode, g)),
        (g.ref = Pt(d, s, f)),
        (g.return = d),
        g);
  }
  function c(d, s, f, g) {
    return s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== f.containerInfo ||
      s.stateNode.implementation !== f.implementation
      ? ((s = ri(f, d.mode, g)), (s.return = d), s)
      : ((s = l(s, f.children || [])), (s.return = d), s);
  }
  function p(d, s, f, g, E) {
    return s === null || s.tag !== 7
      ? ((s = Rn(f, d.mode, g, E)), (s.return = d), s)
      : ((s = l(s, f)), (s.return = d), s);
  }
  function v(d, s, f) {
    if ((typeof s == 'string' && s !== '') || typeof s == 'number')
      return (s = ti('' + s, d.mode, f)), (s.return = d), s;
    if (typeof s == 'object' && s !== null) {
      switch (s.$$typeof) {
        case vr:
          return (
            (f = Vr(s.type, s.key, s.props, null, d.mode, f)),
            (f.ref = Pt(d, null, s)),
            (f.return = d),
            f
          );
        case Qn:
          return (s = ri(s, d.mode, f)), (s.return = d), s;
        case sn:
          var g = s._init;
          return v(d, g(s._payload), f);
      }
      if (Lt(s) || kt(s))
        return (s = Rn(s, d.mode, f, null)), (s.return = d), s;
      _r(d, s);
    }
    return null;
  }
  function h(d, s, f, g) {
    var E = s !== null ? s.key : null;
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return E !== null ? null : a(d, s, '' + f, g);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return f.key === E ? o(d, s, f, g) : null;
        case Qn:
          return f.key === E ? c(d, s, f, g) : null;
        case sn:
          return (E = f._init), h(d, s, E(f._payload), g);
      }
      if (Lt(f) || kt(f)) return E !== null ? null : p(d, s, f, g, null);
      _r(d, f);
    }
    return null;
  }
  function w(d, s, f, g, E) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (d = d.get(f) || null), a(s, d, '' + g, E);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case vr:
          return (d = d.get(g.key === null ? f : g.key) || null), o(s, d, g, E);
        case Qn:
          return (d = d.get(g.key === null ? f : g.key) || null), c(s, d, g, E);
        case sn:
          var k = g._init;
          return w(d, s, f, k(g._payload), E);
      }
      if (Lt(g) || kt(g)) return (d = d.get(f) || null), p(s, d, g, E, null);
      _r(s, g);
    }
    return null;
  }
  function y(d, s, f, g) {
    for (
      var E = null, k = null, _ = s, P = (s = 0), R = null;
      _ !== null && P < f.length;
      P++
    ) {
      _.index > P ? ((R = _), (_ = null)) : (R = _.sibling);
      var N = h(d, _, f[P], g);
      if (N === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && N.alternate === null && n(d, _),
        (s = i(N, s, P)),
        k === null ? (E = N) : (k.sibling = N),
        (k = N),
        (_ = R);
    }
    if (P === f.length) return t(d, _), $ && zn(d, P), E;
    if (_ === null) {
      for (; P < f.length; P++)
        (_ = v(d, f[P], g)),
          _ !== null &&
            ((s = i(_, s, P)), k === null ? (E = _) : (k.sibling = _), (k = _));
      return $ && zn(d, P), E;
    }
    for (_ = r(d, _); P < f.length; P++)
      (R = w(_, d, P, f[P], g)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? P : R.key),
          (s = i(R, s, P)),
          k === null ? (E = R) : (k.sibling = R),
          (k = R));
    return (
      e &&
        _.forEach(function (J) {
          return n(d, J);
        }),
      $ && zn(d, P),
      E
    );
  }
  function m(d, s, f, g) {
    var E = kt(f);
    if (typeof E != 'function') throw Error(S(150));
    if (((f = E.call(f)), f == null)) throw Error(S(151));
    for (
      var k = (E = null), _ = s, P = (s = 0), R = null, N = f.next();
      _ !== null && !N.done;
      P++, N = f.next()
    ) {
      _.index > P ? ((R = _), (_ = null)) : (R = _.sibling);
      var J = h(d, _, N.value, g);
      if (J === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && J.alternate === null && n(d, _),
        (s = i(J, s, P)),
        k === null ? (E = J) : (k.sibling = J),
        (k = J),
        (_ = R);
    }
    if (N.done) return t(d, _), $ && zn(d, P), E;
    if (_ === null) {
      for (; !N.done; P++, N = f.next())
        (N = v(d, N.value, g)),
          N !== null &&
            ((s = i(N, s, P)), k === null ? (E = N) : (k.sibling = N), (k = N));
      return $ && zn(d, P), E;
    }
    for (_ = r(d, _); !N.done; P++, N = f.next())
      (N = w(_, d, P, N.value, g)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? P : N.key),
          (s = i(N, s, P)),
          k === null ? (E = N) : (k.sibling = N),
          (k = N));
    return (
      e &&
        _.forEach(function (je) {
          return n(d, je);
        }),
      $ && zn(d, P),
      E
    );
  }
  function L(d, s, f, g) {
    if (
      (typeof f == 'object' &&
        f !== null &&
        f.type === Kn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == 'object' && f !== null)
    ) {
      switch (f.$$typeof) {
        case vr:
          e: {
            for (var E = f.key, k = s; k !== null; ) {
              if (k.key === E) {
                if (((E = f.type), E === Kn)) {
                  if (k.tag === 7) {
                    t(d, k.sibling),
                      (s = l(k, f.props.children)),
                      (s.return = d),
                      (d = s);
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === sn &&
                    Bo(E) === k.type)
                ) {
                  t(d, k.sibling),
                    (s = l(k, f.props)),
                    (s.ref = Pt(d, k, f)),
                    (s.return = d),
                    (d = s);
                  break e;
                }
                t(d, k);
                break;
              } else n(d, k);
              k = k.sibling;
            }
            f.type === Kn
              ? ((s = Rn(f.props.children, d.mode, g, f.key)),
                (s.return = d),
                (d = s))
              : ((g = Vr(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = Pt(d, s, f)),
                (g.return = d),
                (d = g));
          }
          return u(d);
        case Qn:
          e: {
            for (k = f.key; s !== null; ) {
              if (s.key === k)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === f.containerInfo &&
                  s.stateNode.implementation === f.implementation
                ) {
                  t(d, s.sibling),
                    (s = l(s, f.children || [])),
                    (s.return = d),
                    (d = s);
                  break e;
                } else {
                  t(d, s);
                  break;
                }
              else n(d, s);
              s = s.sibling;
            }
            (s = ri(f, d.mode, g)), (s.return = d), (d = s);
          }
          return u(d);
        case sn:
          return (k = f._init), L(d, s, k(f._payload), g);
      }
      if (Lt(f)) return y(d, s, f, g);
      if (kt(f)) return m(d, s, f, g);
      _r(d, f);
    }
    return (typeof f == 'string' && f !== '') || typeof f == 'number'
      ? ((f = '' + f),
        s !== null && s.tag === 6
          ? (t(d, s.sibling), (s = l(s, f)), (s.return = d), (d = s))
          : (t(d, s), (s = ti(f, d.mode, g)), (s.return = d), (d = s)),
        u(d))
      : t(d, s);
  }
  return L;
}
var dt = Os(!0),
  Ds = Os(!1),
  nl = Pn(null),
  tl = null,
  et = null,
  xu = null;
function Cu() {
  xu = et = tl = null;
}
function _u(e) {
  var n = nl.current;
  U(nl), (e._currentValue = n);
}
function Ri(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function ot(e, n) {
  (tl = e),
    (xu = et = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (pe = !0), (e.firstContext = null));
}
function Ne(e) {
  var n = e._currentValue;
  if (xu !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), et === null)) {
      if (tl === null) throw Error(S(308));
      (et = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else et = et.next = e;
  return n;
}
var On = null;
function Pu(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Is(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), Pu(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    ln(e, r)
  );
}
function ln(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var cn = !1;
function Nu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function Rs(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
}
function en(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function wn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      ln(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), Pu(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    ln(e, t)
  );
}
function Rr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), du(e, t);
  }
}
function Ho(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var u = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null
        };
        i === null ? (l = i = u) : (i = i.next = u), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function rl(e, n, t, r) {
  var l = e.updateQueue;
  cn = !1;
  var i = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var o = a,
      c = o.next;
    (o.next = null), u === null ? (i = c) : (u.next = c), (u = o);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== u &&
        (a === null ? (p.firstBaseUpdate = c) : (a.next = c),
        (p.lastBaseUpdate = o)));
  }
  if (i !== null) {
    var v = l.baseState;
    (u = 0), (p = c = o = null), (a = i);
    do {
      var h = a.lane,
        w = a.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            });
        e: {
          var y = e,
            m = a;
          switch (((h = n), (w = t), m.tag)) {
            case 1:
              if (((y = m.payload), typeof y == 'function')) {
                v = y.call(w, v, h);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = m.payload),
                (h = typeof y == 'function' ? y.call(w, v, h) : y),
                h == null)
              )
                break e;
              v = H({}, v, h);
              break e;
            case 2:
              cn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          p === null ? ((c = p = w), (o = v)) : (p = p.next = w),
          (u |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (o = v),
      (l.baseState = o),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (u |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (An |= u), (e.lanes = u), (e.memoizedState = v);
  }
}
function Wo(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != 'function'))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var fr = {},
  Ye = Pn(fr),
  nr = Pn(fr),
  tr = Pn(fr);
function Dn(e) {
  if (e === fr) throw Error(S(174));
  return e;
}
function Tu(e, n) {
  switch ((F(tr, n), F(nr, e), F(Ye, fr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : hi(null, '');
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = hi(n, e));
  }
  U(Ye), F(Ye, n);
}
function pt() {
  U(Ye), U(nr), U(tr);
}
function Fs(e) {
  Dn(tr.current);
  var n = Dn(Ye.current),
    t = hi(n, e.type);
  n !== t && (F(nr, e), F(Ye, t));
}
function zu(e) {
  nr.current === e && (U(Ye), U(nr));
}
var V = Pn(0);
function ll(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Xl = [];
function Lu() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Fr = on.ReactCurrentDispatcher,
  Jl = on.ReactCurrentBatchConfig,
  Un = 0,
  B = null,
  Z = null,
  q = null,
  il = !1,
  Ut = !1,
  rr = 0,
  Wd = 0;
function le() {
  throw Error(S(321));
}
function Mu(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Fe(e[t], n[t])) return !1;
  return !0;
}
function Ou(e, n, t, r, l, i) {
  if (
    ((Un = i),
    (B = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Fr.current = e === null || e.memoizedState === null ? Gd : Zd),
    (e = t(r, l)),
    Ut)
  ) {
    i = 0;
    do {
      if (((Ut = !1), (rr = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (q = Z = null),
        (n.updateQueue = null),
        (Fr.current = Xd),
        (e = t(r, l));
    } while (Ut);
  }
  if (
    ((Fr.current = ul),
    (n = Z !== null && Z.next !== null),
    (Un = 0),
    (q = Z = B = null),
    (il = !1),
    n)
  )
    throw Error(S(300));
  return e;
}
function Du() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q;
}
function Te() {
  if (Z === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var n = q === null ? B.memoizedState : q.next;
  if (n !== null) (q = n), (Z = e);
  else {
    if (e === null) throw Error(S(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null
      }),
      q === null ? (B.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function lr(e, n) {
  return typeof n == 'function' ? n(e) : n;
}
function ql(e) {
  var n = Te(),
    t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = i.next), (i.next = u);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (u = null),
      o = null,
      c = i;
    do {
      var p = c.lane;
      if ((Un & p) === p)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        o === null ? ((a = o = v), (u = r)) : (o = o.next = v),
          (B.lanes |= p),
          (An |= p);
      }
      c = c.next;
    } while (c !== null && c !== i);
    o === null ? (u = r) : (o.next = a),
      Fe(r, n.memoizedState) || (pe = !0),
      (n.memoizedState = r),
      (n.baseState = u),
      (n.baseQueue = o),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), (An |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function bl(e) {
  var n = Te(),
    t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = (l = l.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== l);
    Fe(i, n.memoizedState) || (pe = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function js() {}
function Us(e, n) {
  var t = B,
    r = Te(),
    l = n(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Iu(Vs.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      ir(9, $s.bind(null, t, r, l, n), void 0, null),
      b === null)
    )
      throw Error(S(349));
    Un & 30 || As(t, n, l);
  }
  return l;
}
function As(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = B.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (B.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function $s(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Bs(n) && Hs(e);
}
function Vs(e, n, t) {
  return t(function () {
    Bs(n) && Hs(e);
  });
}
function Bs(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Fe(e, t);
  } catch {
    return !0;
  }
}
function Hs(e) {
  var n = ln(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Qo(e) {
  var n = Be();
  return (
    typeof e == 'function' && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e
    }),
    (n.queue = e),
    (e = e.dispatch = Yd.bind(null, B, e)),
    [n.memoizedState, e]
  );
}
function ir(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = B.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (B.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Ws() {
  return Te().memoizedState;
}
function jr(e, n, t, r) {
  var l = Be();
  (B.flags |= e),
    (l.memoizedState = ir(1 | n, t, void 0, r === void 0 ? null : r));
}
function Sl(e, n, t, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var u = Z.memoizedState;
    if (((i = u.destroy), r !== null && Mu(r, u.deps))) {
      l.memoizedState = ir(n, t, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = ir(1 | n, t, i, r));
}
function Ko(e, n) {
  return jr(8390656, 8, e, n);
}
function Iu(e, n) {
  return Sl(2048, 8, e, n);
}
function Qs(e, n) {
  return Sl(4, 2, e, n);
}
function Ks(e, n) {
  return Sl(4, 4, e, n);
}
function Ys(e, n) {
  if (typeof n == 'function')
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Gs(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), Sl(4, 4, Ys.bind(null, n, e), t)
  );
}
function Ru() {}
function Zs(e, n) {
  var t = Te();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Mu(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Xs(e, n) {
  var t = Te();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Mu(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Js(e, n, t) {
  return Un & 21
    ? (Fe(t, n) || ((t = ts()), (B.lanes |= t), (An |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = t));
}
function Qd(e, n) {
  var t = I;
  (I = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), n();
  } finally {
    (I = t), (Jl.transition = r);
  }
}
function qs() {
  return Te().memoizedState;
}
function Kd(e, n, t) {
  var r = kn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    bs(e))
  )
    ec(n, t);
  else if (((t = Is(e, n, t, r)), t !== null)) {
    var l = se();
    Re(t, e, r, l), nc(t, n, r);
  }
}
function Yd(e, n, t) {
  var r = kn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (bs(e)) ec(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var u = n.lastRenderedState,
          a = i(u, t);
        if (((l.hasEagerState = !0), (l.eagerState = a), Fe(a, u))) {
          var o = n.interleaved;
          o === null
            ? ((l.next = l), Pu(n))
            : ((l.next = o.next), (o.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = Is(e, n, l, r)),
      t !== null && ((l = se()), Re(t, e, r, l), nc(t, n, r));
  }
}
function bs(e) {
  var n = e.alternate;
  return e === B || (n !== null && n === B);
}
function ec(e, n) {
  Ut = il = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function nc(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), du(e, t);
  }
}
var ul = {
    readContext: Ne,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1
  },
  Gd = {
    readContext: Ne,
    useCallback: function (e, n) {
      return (Be().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ne,
    useEffect: Ko,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        jr(4194308, 4, Ys.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return jr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return jr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Be();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Be();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }),
        (r.queue = e),
        (e = e.dispatch = Kd.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Be();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Qo,
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Qo(!1),
        n = e[0];
      return (e = Qd.bind(null, e[1])), (Be().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = B,
        l = Be();
      if ($) {
        if (t === void 0) throw Error(S(407));
        t = t();
      } else {
        if (((t = n()), b === null)) throw Error(S(349));
        Un & 30 || As(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Ko(Vs.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ir(9, $s.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Be(),
        n = b.identifierPrefix;
      if ($) {
        var t = be,
          r = qe;
        (t = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + t),
          (n = ':' + n + 'R' + t),
          (t = rr++),
          0 < t && (n += 'H' + t.toString(32)),
          (n += ':');
      } else (t = Wd++), (n = ':' + n + 'r' + t.toString(32) + ':');
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1
  },
  Zd = {
    readContext: Ne,
    useCallback: Zs,
    useContext: Ne,
    useEffect: Iu,
    useImperativeHandle: Gs,
    useInsertionEffect: Qs,
    useLayoutEffect: Ks,
    useMemo: Xs,
    useReducer: ql,
    useRef: Ws,
    useState: function () {
      return ql(lr);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      var n = Te();
      return Js(n, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(lr)[0],
        n = Te().memoizedState;
      return [e, n];
    },
    useMutableSource: js,
    useSyncExternalStore: Us,
    useId: qs,
    unstable_isNewReconciler: !1
  },
  Xd = {
    readContext: Ne,
    useCallback: Zs,
    useContext: Ne,
    useEffect: Iu,
    useImperativeHandle: Gs,
    useInsertionEffect: Qs,
    useLayoutEffect: Ks,
    useMemo: Xs,
    useReducer: bl,
    useRef: Ws,
    useState: function () {
      return bl(lr);
    },
    useDebugValue: Ru,
    useDeferredValue: function (e) {
      var n = Te();
      return Z === null ? (n.memoizedState = e) : Js(n, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(lr)[0],
        n = Te().memoizedState;
      return [e, n];
    },
    useMutableSource: js,
    useSyncExternalStore: Us,
    useId: qs,
    unstable_isNewReconciler: !1
  };
function Le(e, n) {
  if (e && e.defaultProps) {
    (n = H({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Fi(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : H({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = se(),
      l = kn(e),
      i = en(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = wn(e, i, l)),
      n !== null && (Re(n, e, l, r), Rr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = se(),
      l = kn(e),
      i = en(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = wn(e, i, l)),
      n !== null && (Re(n, e, l, r), Rr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = se(),
      r = kn(e),
      l = en(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = wn(e, l, r)),
      n !== null && (Re(n, e, r, t), Rr(n, e, r));
  }
};
function Yo(e, n, t, r, l, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, u)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Jt(t, r) || !Jt(l, i)
      : !0
  );
}
function tc(e, n, t) {
  var r = !1,
    l = Cn,
    i = n.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Ne(i))
      : ((l = he(n) ? Fn : oe.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? ct(e, l) : Cn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = kl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Go(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == 'function' &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && kl.enqueueReplaceState(n, n.state, null);
}
function ji(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Nu(e);
  var i = n.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = Ne(i))
    : ((i = he(n) ? Fn : oe.current), (l.context = ct(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == 'function' && (Fi(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((n = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && kl.enqueueReplaceState(l, l.state, null),
      rl(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function vt(e, n) {
  try {
    var t = '',
      r = n;
    do (t += Cf(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function ei(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Ui(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Jd = typeof WeakMap == 'function' ? WeakMap : Map;
function rc(e, n, t) {
  (t = en(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      al || ((al = !0), (Gi = r)), Ui(e, n);
    }),
    t
  );
}
function lc(e, n, t) {
  (t = en(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Ui(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        Ui(e, n),
          typeof r != 'function' &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: u !== null ? u : ''
        });
      }),
    t
  );
}
function Zo(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = fp.bind(null, e, n, t)), n.then(e, e));
}
function Xo(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jo(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = en(-1, 1)), (n.tag = 2), wn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var qd = on.ReactCurrentOwner,
  pe = !1;
function ae(e, n, t, r) {
  n.child = e === null ? Ds(n, null, t, r) : dt(n, e.child, t, r);
}
function qo(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    ot(n, l),
    (r = Ou(e, n, t, r, i, l)),
    (t = Du()),
    e !== null && !pe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        un(e, n, l))
      : ($ && t && Su(n), (n.flags |= 1), ae(e, n, r, l), n.child)
  );
}
function bo(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == 'function' &&
      !Hu(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), ic(e, n, i, r, l))
      : ((e = Vr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var u = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Jt), t(u, r) && e.ref === n.ref)
    )
      return un(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = En(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function ic(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jt(i, r) && e.ref === n.ref)
      if (((pe = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (n.lanes = e.lanes), un(e, n, l);
  }
  return Ai(e, n, t, r, l);
}
function uc(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(tt, ge),
        (ge |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (n.updateQueue = null),
          F(tt, ge),
          (ge |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        F(tt, ge),
        (ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      F(tt, ge),
      (ge |= r);
  return ae(e, n, l, t), n.child;
}
function oc(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Ai(e, n, t, r, l) {
  var i = he(t) ? Fn : oe.current;
  return (
    (i = ct(n, i)),
    ot(n, l),
    (t = Ou(e, n, t, r, i, l)),
    (r = Du()),
    e !== null && !pe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        un(e, n, l))
      : ($ && r && Su(n), (n.flags |= 1), ae(e, n, t, l), n.child)
  );
}
function ea(e, n, t, r, l) {
  if (he(t)) {
    var i = !0;
    qr(n);
  } else i = !1;
  if ((ot(n, l), n.stateNode === null))
    Ur(e, n), tc(n, t, r), ji(n, t, r, l), (r = !0);
  else if (e === null) {
    var u = n.stateNode,
      a = n.memoizedProps;
    u.props = a;
    var o = u.context,
      c = t.contextType;
    typeof c == 'object' && c !== null
      ? (c = Ne(c))
      : ((c = he(t) ? Fn : oe.current), (c = ct(n, c)));
    var p = t.getDerivedStateFromProps,
      v =
        typeof p == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    v ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((a !== r || o !== c) && Go(n, u, r, c)),
      (cn = !1);
    var h = n.memoizedState;
    (u.state = h),
      rl(n, r, u, l),
      (o = n.memoizedState),
      a !== r || h !== o || ve.current || cn
        ? (typeof p == 'function' && (Fi(n, t, p, r), (o = n.memoizedState)),
          (a = cn || Yo(n, t, a, r, h, o, c))
            ? (v ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (n.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = o)),
          (u.props = r),
          (u.state = o),
          (u.context = c),
          (r = a))
        : (typeof u.componentDidMount == 'function' && (n.flags |= 4194308),
          (r = !1));
  } else {
    (u = n.stateNode),
      Rs(e, n),
      (a = n.memoizedProps),
      (c = n.type === n.elementType ? a : Le(n.type, a)),
      (u.props = c),
      (v = n.pendingProps),
      (h = u.context),
      (o = t.contextType),
      typeof o == 'object' && o !== null
        ? (o = Ne(o))
        : ((o = he(t) ? Fn : oe.current), (o = ct(n, o)));
    var w = t.getDerivedStateFromProps;
    (p =
      typeof w == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((a !== v || h !== o) && Go(n, u, r, o)),
      (cn = !1),
      (h = n.memoizedState),
      (u.state = h),
      rl(n, r, u, l);
    var y = n.memoizedState;
    a !== v || h !== y || ve.current || cn
      ? (typeof w == 'function' && (Fi(n, t, w, r), (y = n.memoizedState)),
        (c = cn || Yo(n, t, c, r, h, y, o) || !1)
          ? (p ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, y, o),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, y, o)),
            typeof u.componentDidUpdate == 'function' && (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = y)),
        (u.props = r),
        (u.state = y),
        (u.context = o),
        (r = c))
      : (typeof u.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return $i(e, n, t, r, i, l);
}
function $i(e, n, t, r, l, i) {
  oc(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u) return l && Ao(n, t, !1), un(e, n, i);
  (r = n.stateNode), (qd.current = n);
  var a =
    u && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && u
      ? ((n.child = dt(n, e.child, null, i)), (n.child = dt(n, null, a, i)))
      : ae(e, n, a, i),
    (n.memoizedState = r.state),
    l && Ao(n, t, !0),
    n.child
  );
}
function ac(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Uo(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Uo(e, n.context, !1),
    Tu(e, n.containerInfo);
}
function na(e, n, t, r, l) {
  return ft(), Eu(l), (n.flags |= 256), ae(e, n, t, r), n.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sc(e, n, t) {
  var r = n.pendingProps,
    l = V.current,
    i = !1,
    u = (n.flags & 128) !== 0,
    a;
  if (
    ((a = u) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(V, l & 1),
    e === null)
  )
    return (
      Ii(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === '$!'
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (u = { mode: 'hidden', children: u }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = Cl(u, r, 0, null)),
              (e = Rn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Bi(t)),
              (n.memoizedState = Vi),
              e)
            : Fu(n, u))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return bd(e, n, u, r, a, l, t);
  if (i) {
    (i = r.fallback), (u = n.mode), (l = e.child), (a = l.sibling);
    var o = { mode: 'hidden', children: r.children };
    return (
      !(u & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (n.deletions = null))
        : ((r = En(l, o)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = En(a, i)) : ((i = Rn(i, u, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Bi(t)
          : {
              baseLanes: u.baseLanes | t,
              cachePool: null,
              transitions: u.transitions
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Vi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = En(i, { mode: 'visible', children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Fu(e, n) {
  return (
    (n = Cl({ mode: 'visible', children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function Pr(e, n, t, r) {
  return (
    r !== null && Eu(r),
    dt(n, e.child, null, t),
    (e = Fu(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function bd(e, n, t, r, l, i, u) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = ei(Error(S(422)))), Pr(e, n, u, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = Cl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Rn(i, l, u, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && dt(n, e.child, null, u),
        (n.child.memoizedState = Bi(u)),
        (n.memoizedState = Vi),
        i);
  if (!(n.mode & 1)) return Pr(e, n, u, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(S(419))), (r = ei(i, r, void 0)), Pr(e, n, u, r);
  }
  if (((a = (u & e.childLanes) !== 0), pe || a)) {
    if (((r = b), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), ln(e, l), Re(r, e, l, -1));
    }
    return Bu(), (r = ei(Error(S(421)))), Pr(e, n, u, r);
  }
  return l.data === '$?'
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = dp.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (ye = yn(l.nextSibling)),
      (we = n),
      ($ = !0),
      (Oe = null),
      e !== null &&
        ((xe[Ce++] = qe),
        (xe[Ce++] = be),
        (xe[Ce++] = jn),
        (qe = e.id),
        (be = e.overflow),
        (jn = n)),
      (n = Fu(n, r.children)),
      (n.flags |= 4096),
      n);
}
function ta(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Ri(e.return, n, t);
}
function ni(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function cc(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, n, r.children, t), (r = V.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ta(e, t, n);
        else if (e.tag === 19) ta(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(V, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && ll(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          ni(n, !1, l, t, i);
        break;
      case 'backwards':
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ll(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        ni(n, !0, t, null, i);
        break;
      case 'together':
        ni(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Ur(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function un(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (An |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(S(153));
  if (n.child !== null) {
    for (
      e = n.child, t = En(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = En(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function ep(e, n, t) {
  switch (n.tag) {
    case 3:
      ac(n), ft();
      break;
    case 5:
      Fs(n);
      break;
    case 1:
      he(n.type) && qr(n);
      break;
    case 4:
      Tu(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      F(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(V, V.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? sc(e, n, t)
          : (F(V, V.current & 1),
            (e = un(e, n, t)),
            e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return cc(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), uc(e, n, t);
  }
  return un(e, n, t);
}
var fc, Hi, dc, pc;
fc = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Hi = function () {};
dc = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Dn(Ye.current);
    var i = null;
    switch (t) {
      case 'input':
        (l = fi(e, l)), (r = fi(e, r)), (i = []);
        break;
      case 'select':
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = vi(e, l)), (r = vi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Xr);
    }
    mi(t, r);
    var u;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var a = l[c];
          for (u in a) a.hasOwnProperty(u) && (t || (t = {}), (t[u] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Wt.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && o !== a && (o != null || a != null))
      )
        if (c === 'style')
          if (a) {
            for (u in a)
              !a.hasOwnProperty(u) ||
                (o && o.hasOwnProperty(u)) ||
                (t || (t = {}), (t[u] = ''));
            for (u in o)
              o.hasOwnProperty(u) &&
                a[u] !== o[u] &&
                (t || (t = {}), (t[u] = o[u]));
          } else t || (i || (i = []), i.push(c, t)), (t = o);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (i = i || []).push(c, o))
            : c === 'children'
            ? (typeof o != 'string' && typeof o != 'number') ||
              (i = i || []).push(c, '' + o)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Wt.hasOwnProperty(c)
                ? (o != null && c === 'onScroll' && j('scroll', e),
                  i || a === o || (i = []))
                : (i = i || []).push(c, o));
    }
    t && (i = i || []).push('style', t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
pc = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Nt(e, n) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case 'collapsed':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function np(e, n, t) {
  var r = n.pendingProps;
  switch ((ku(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(n), null;
    case 1:
      return he(n.type) && Jr(), ie(n), null;
    case 3:
      return (
        (r = n.stateNode),
        pt(),
        U(ve),
        U(oe),
        Lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Oe !== null && (Ji(Oe), (Oe = null)))),
        Hi(e, n),
        ie(n),
        null
      );
    case 5:
      zu(n);
      var l = Dn(tr.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        dc(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(S(166));
          return ie(n), null;
        }
        if (((e = Dn(Ye.current)), Cr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[He] = n), (r[er] = i), (e = (n.mode & 1) !== 0), t)) {
            case 'dialog':
              j('cancel', r), j('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              j('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Ot.length; l++) j(Ot[l], r);
              break;
            case 'source':
              j('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              j('error', r), j('load', r);
              break;
            case 'details':
              j('toggle', r);
              break;
            case 'input':
              co(r, i), j('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                j('invalid', r);
              break;
            case 'textarea':
              po(r, i), j('invalid', r);
          }
          mi(t, i), (l = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var a = i[u];
              u === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Wt.hasOwnProperty(u) &&
                  a != null &&
                  u === 'onScroll' &&
                  j('scroll', r);
            }
          switch (t) {
            case 'input':
              hr(r), fo(r, i, !0);
              break;
            case 'textarea':
              hr(r), vo(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Xr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Va(t)),
            e === 'http://www.w3.org/1999/xhtml'
              ? t === 'script'
                ? ((e = u.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = u.createElement(t, { is: r.is }))
                : ((e = u.createElement(t)),
                  t === 'select' &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, t)),
            (e[He] = n),
            (e[er] = r),
            fc(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((u = gi(t, r)), t)) {
              case 'dialog':
                j('cancel', e), j('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                j('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Ot.length; l++) j(Ot[l], e);
                l = r;
                break;
              case 'source':
                j('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                j('error', e), j('load', e), (l = r);
                break;
              case 'details':
                j('toggle', e), (l = r);
                break;
              case 'input':
                co(e, r), (l = fi(e, r)), j('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  j('invalid', e);
                break;
              case 'textarea':
                po(e, r), (l = vi(e, r)), j('invalid', e);
                break;
              default:
                l = r;
            }
            mi(t, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var o = a[i];
                i === 'style'
                  ? Wa(e, o)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((o = o ? o.__html : void 0), o != null && Ba(e, o))
                  : i === 'children'
                  ? typeof o == 'string'
                    ? (t !== 'textarea' || o !== '') && Qt(e, o)
                    : typeof o == 'number' && Qt(e, '' + o)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Wt.hasOwnProperty(i)
                      ? o != null && i === 'onScroll' && j('scroll', e)
                      : o != null && uu(e, i, o, u));
              }
            switch (t) {
              case 'input':
                hr(e), fo(e, r, !1);
                break;
              case 'textarea':
                hr(e), vo(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + xn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Xr);
            }
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return ie(n), null;
    case 6:
      if (e && n.stateNode != null) pc(e, n, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && n.stateNode === null) throw Error(S(166));
        if (((t = Dn(tr.current)), Dn(Ye.current), Cr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[He] = n),
            (i = r.nodeValue !== t) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[He] = n),
            (n.stateNode = r);
      }
      return ie(n), null;
    case 13:
      if (
        (U(V),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && n.mode & 1 && !(n.flags & 128))
          Ms(), ft(), (n.flags |= 98560), (i = !1);
        else if (((i = Cr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[He] = n;
          } else
            ft(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          ie(n), (i = !1);
        } else Oe !== null && (Ji(Oe), (Oe = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || V.current & 1 ? X === 0 && (X = 3) : Bu())),
          n.updateQueue !== null && (n.flags |= 4),
          ie(n),
          null);
    case 4:
      return (
        pt(), Hi(e, n), e === null && qt(n.stateNode.containerInfo), ie(n), null
      );
    case 10:
      return _u(n.type._context), ie(n), null;
    case 17:
      return he(n.type) && Jr(), ie(n), null;
    case 19:
      if ((U(V), (i = n.memoizedState), i === null)) return ie(n), null;
      if (((r = (n.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) Nt(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((u = ll(e)), u !== null)) {
                for (
                  n.flags |= 128,
                    Nt(i, !1),
                    r = u.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (t = t.sibling);
                return F(V, (V.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > ht &&
            ((n.flags |= 128), (r = !0), Nt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(u)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              Nt(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !u.alternate && !$)
            )
              return ie(n), null;
          } else
            2 * Y() - i.renderingStartTime > ht &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), Nt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = n.child), (n.child = u))
          : ((t = i.last),
            t !== null ? (t.sibling = u) : (n.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Y()),
          (n.sibling = null),
          (t = V.current),
          F(V, r ? (t & 1) | 2 : t & 1),
          n)
        : (ie(n), null);
    case 22:
    case 23:
      return (
        Vu(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? ge & 1073741824 && (ie(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ie(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, n.tag));
}
function tp(e, n) {
  switch ((ku(n), n.tag)) {
    case 1:
      return (
        he(n.type) && Jr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        pt(),
        U(ve),
        U(oe),
        Lu(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return zu(n), null;
    case 13:
      if ((U(V), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(S(340));
        ft();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return U(V), null;
    case 4:
      return pt(), null;
    case 10:
      return _u(n.type._context), null;
    case 22:
    case 23:
      return Vu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ue = !1,
  rp = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null;
function nt(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (r) {
        W(e, n, r);
      }
    else t.current = null;
}
function Wi(e, n, t) {
  try {
    t();
  } catch (r) {
    W(e, n, r);
  }
}
var ra = !1;
function lp(e, n) {
  if (((Ni = Yr), (e = ys()), wu(e))) {
    if ('selectionStart' in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0,
            a = -1,
            o = -1,
            c = 0,
            p = 0,
            v = e,
            h = null;
          n: for (;;) {
            for (
              var w;
              v !== t || (l !== 0 && v.nodeType !== 3) || (a = u + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (o = u + r),
                v.nodeType === 3 && (u += v.nodeValue.length),
                (w = v.firstChild) !== null;

            )
              (h = v), (v = w);
            for (;;) {
              if (v === e) break n;
              if (
                (h === t && ++c === l && (a = u),
                h === i && ++p === r && (o = u),
                (w = v.nextSibling) !== null)
              )
                break;
              (v = h), (h = v.parentNode);
            }
            v = w;
          }
          t = a === -1 || o === -1 ? null : { start: a, end: o };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Ti = { focusedElem: e, selectionRange: t }, Yr = !1, C = n; C !== null; )
    if (((n = C), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (C = e);
    else
      for (; C !== null; ) {
        n = C;
        try {
          var y = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var m = y.memoizedProps,
                    L = y.memoizedState,
                    d = n.stateNode,
                    s = d.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? m : Le(n.type, m),
                      L
                    );
                  d.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var f = n.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = '')
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (g) {
          W(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (C = e);
          break;
        }
        C = n.return;
      }
  return (y = ra), (ra = !1), y;
}
function At(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Wi(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Qi(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == 'function' ? n(e) : (n.current = e);
  }
}
function vc(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), vc(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[He], delete n[er], delete n[Mi], delete n[$d], delete n[Vd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function la(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ki(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Xr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ki(e, n, t), e = e.sibling; e !== null; ) Ki(e, n, t), (e = e.sibling);
}
function Yi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yi(e, n, t), e = e.sibling; e !== null; ) Yi(e, n, t), (e = e.sibling);
}
var ne = null,
  Me = !1;
function an(e, n, t) {
  for (t = t.child; t !== null; ) mc(e, n, t), (t = t.sibling);
}
function mc(e, n, t) {
  if (Ke && typeof Ke.onCommitFiberUnmount == 'function')
    try {
      Ke.onCommitFiberUnmount(vl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      ue || nt(t, n);
    case 6:
      var r = ne,
        l = Me;
      (ne = null),
        an(e, n, t),
        (ne = r),
        (Me = l),
        ne !== null &&
          (Me
            ? ((e = ne),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : ne.removeChild(t.stateNode));
      break;
    case 18:
      ne !== null &&
        (Me
          ? ((e = ne),
            (t = t.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, t)
              : e.nodeType === 1 && Gl(e, t),
            Zt(e))
          : Gl(ne, t.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Me),
        (ne = t.stateNode.containerInfo),
        (Me = !0),
        an(e, n, t),
        (ne = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && Wi(t, n, u),
            (l = l.next);
        } while (l !== r);
      }
      an(e, n, t);
      break;
    case 1:
      if (
        !ue &&
        (nt(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          W(t, n, a);
        }
      an(e, n, t);
      break;
    case 21:
      an(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((ue = (r = ue) || t.memoizedState !== null), an(e, n, t), (ue = r))
        : an(e, n, t);
      break;
    default:
      an(e, n, t);
  }
}
function ia(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new rp()),
      n.forEach(function (r) {
        var l = pp.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ze(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          u = n,
          a = u;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ne = a.stateNode), (Me = !1);
              break e;
            case 3:
              (ne = a.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (ne = a.stateNode.containerInfo), (Me = !0);
              break e;
          }
          a = a.return;
        }
        if (ne === null) throw Error(S(160));
        mc(i, u, l), (ne = null), (Me = !1);
        var o = l.alternate;
        o !== null && (o.return = null), (l.return = null);
      } catch (c) {
        W(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) gc(n, e), (n = n.sibling);
}
function gc(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(n, e), Ve(e), r & 4)) {
        try {
          At(3, e, e.return), El(3, e);
        } catch (m) {
          W(e, e.return, m);
        }
        try {
          At(5, e, e.return);
        } catch (m) {
          W(e, e.return, m);
        }
      }
      break;
    case 1:
      ze(n, e), Ve(e), r & 512 && t !== null && nt(t, t.return);
      break;
    case 5:
      if (
        (ze(n, e),
        Ve(e),
        r & 512 && t !== null && nt(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qt(l, '');
        } catch (m) {
          W(e, e.return, m);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          u = t !== null ? t.memoizedProps : i,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Aa(l, i),
              gi(a, u);
            var c = gi(a, i);
            for (u = 0; u < o.length; u += 2) {
              var p = o[u],
                v = o[u + 1];
              p === 'style'
                ? Wa(l, v)
                : p === 'dangerouslySetInnerHTML'
                ? Ba(l, v)
                : p === 'children'
                ? Qt(l, v)
                : uu(l, p, v, c);
            }
            switch (a) {
              case 'input':
                di(l, i);
                break;
              case 'textarea':
                $a(l, i);
                break;
              case 'select':
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? rt(l, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rt(l, !!i.multiple, i.defaultValue, !0)
                      : rt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[er] = i;
          } catch (m) {
            W(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((ze(n, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (m) {
          W(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (ze(n, e), Ve(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Zt(n.containerInfo);
        } catch (m) {
          W(e, e.return, m);
        }
      break;
    case 4:
      ze(n, e), Ve(e);
      break;
    case 13:
      ze(n, e),
        Ve(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Au = Y())),
        r & 4 && ia(e);
      break;
    case 22:
      if (
        ((p = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((ue = (c = ue) || p), ze(n, e), (ue = c)) : ze(n, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (C = e, p = e.child; p !== null; ) {
            for (v = C = p; C !== null; ) {
              switch (((h = C), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  At(4, h, h.return);
                  break;
                case 1:
                  nt(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = h), (t = h.return);
                    try {
                      (n = r),
                        (y.props = n.memoizedProps),
                        (y.state = n.memoizedState),
                        y.componentWillUnmount();
                    } catch (m) {
                      W(r, t, m);
                    }
                  }
                  break;
                case 5:
                  nt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    oa(v);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (C = w)) : oa(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (l = v.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = v.stateNode),
                      (o = v.memoizedProps.style),
                      (u =
                        o != null && o.hasOwnProperty('display')
                          ? o.display
                          : null),
                      (a.style.display = Ha('display', u)));
              } catch (m) {
                W(e, e.return, m);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = c ? '' : v.memoizedProps;
              } catch (m) {
                W(e, e.return, m);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      ze(n, e), Ve(e), r & 4 && ia(e);
      break;
    case 21:
      break;
    default:
      ze(n, e), Ve(e);
  }
}
function Ve(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (hc(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qt(l, ''), (r.flags &= -33));
          var i = la(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            a = la(e);
          Ki(e, a, u);
          break;
        default:
          throw Error(S(161));
      }
    } catch (o) {
      W(e, e.return, o);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function ip(e, n, t) {
  (C = e), yc(e);
}
function yc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || Nr;
      if (!u) {
        var a = l.alternate,
          o = (a !== null && a.memoizedState !== null) || ue;
        a = Nr;
        var c = ue;
        if (((Nr = u), (ue = o) && !c))
          for (C = l; C !== null; )
            (u = C),
              (o = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? aa(l)
                : o !== null
                ? ((o.return = u), (C = o))
                : aa(l);
        for (; i !== null; ) (C = i), yc(i), (i = i.sibling);
        (C = l), (Nr = a), (ue = c);
      }
      ua(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : ua(e);
  }
}
function ua(e) {
  for (; C !== null; ) {
    var n = C;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ue || El(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !ue)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Le(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && Wo(n, i, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Wo(n, u, t);
              }
              break;
            case 5:
              var a = n.stateNode;
              if (t === null && n.flags & 4) {
                t = a;
                var o = n.memoizedProps;
                switch (n.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    o.autoFocus && t.focus();
                    break;
                  case 'img':
                    o.src && (t.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Zt(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ue || (n.flags & 512 && Qi(n));
      } catch (h) {
        W(n, n.return, h);
      }
    }
    if (n === e) {
      C = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (C = t);
      break;
    }
    C = n.return;
  }
}
function oa(e) {
  for (; C !== null; ) {
    var n = C;
    if (n === e) {
      C = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (C = t);
      break;
    }
    C = n.return;
  }
}
function aa(e) {
  for (; C !== null; ) {
    var n = C;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            El(4, n);
          } catch (o) {
            W(n, t, o);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (o) {
              W(n, l, o);
            }
          }
          var i = n.return;
          try {
            Qi(n);
          } catch (o) {
            W(n, i, o);
          }
          break;
        case 5:
          var u = n.return;
          try {
            Qi(n);
          } catch (o) {
            W(n, u, o);
          }
      }
    } catch (o) {
      W(n, n.return, o);
    }
    if (n === e) {
      C = null;
      break;
    }
    var a = n.sibling;
    if (a !== null) {
      (a.return = n.return), (C = a);
      break;
    }
    C = n.return;
  }
}
var up = Math.ceil,
  ol = on.ReactCurrentDispatcher,
  ju = on.ReactCurrentOwner,
  Pe = on.ReactCurrentBatchConfig,
  D = 0,
  b = null,
  G = null,
  te = 0,
  ge = 0,
  tt = Pn(0),
  X = 0,
  ur = null,
  An = 0,
  xl = 0,
  Uu = 0,
  $t = null,
  de = null,
  Au = 0,
  ht = 1 / 0,
  Xe = null,
  al = !1,
  Gi = null,
  Sn = null,
  Tr = !1,
  vn = null,
  sl = 0,
  Vt = 0,
  Zi = null,
  Ar = -1,
  $r = 0;
function se() {
  return D & 6 ? Y() : Ar !== -1 ? Ar : (Ar = Y());
}
function kn(e) {
  return e.mode & 1
    ? D & 2 && te !== 0
      ? te & -te
      : Hd.transition !== null
      ? ($r === 0 && ($r = ts()), $r)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ss(e.type))),
        e)
    : 1;
}
function Re(e, n, t, r) {
  if (50 < Vt) throw ((Vt = 0), (Zi = null), Error(S(185)));
  ar(e, t, r),
    (!(D & 2) || e !== b) &&
      (e === b && (!(D & 2) && (xl |= t), X === 4 && dn(e, te)),
      me(e, r),
      t === 1 && D === 0 && !(n.mode & 1) && ((ht = Y() + 500), wl && Nn()));
}
function me(e, n) {
  var t = e.callbackNode;
  Hf(e, n);
  var r = Kr(e, e === b ? te : 0);
  if (r === 0)
    t !== null && go(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && go(t), n === 1))
      e.tag === 0 ? Bd(sa.bind(null, e)) : Ts(sa.bind(null, e)),
        Ud(function () {
          !(D & 6) && Nn();
        }),
        (t = null);
    else {
      switch (rs(r)) {
        case 1:
          t = fu;
          break;
        case 4:
          t = es;
          break;
        case 16:
          t = Qr;
          break;
        case 536870912:
          t = ns;
          break;
        default:
          t = Qr;
      }
      t = Pc(t, wc.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function wc(e, n) {
  if (((Ar = -1), ($r = 0), D & 6)) throw Error(S(327));
  var t = e.callbackNode;
  if (at() && e.callbackNode !== t) return null;
  var r = Kr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = cl(e, r);
  else {
    n = r;
    var l = D;
    D |= 2;
    var i = kc();
    (b !== e || te !== n) && ((Xe = null), (ht = Y() + 500), In(e, n));
    do
      try {
        sp();
        break;
      } catch (a) {
        Sc(e, a);
      }
    while (!0);
    Cu(),
      (ol.current = i),
      (D = l),
      G !== null ? (n = 0) : ((b = null), (te = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = Ei(e)), l !== 0 && ((r = l), (n = Xi(e, l)))), n === 1)
    )
      throw ((t = ur), In(e, 0), dn(e, r), me(e, Y()), t);
    if (n === 6) dn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !op(l) &&
          ((n = cl(e, r)),
          n === 2 && ((i = Ei(e)), i !== 0 && ((r = i), (n = Xi(e, i)))),
          n === 1))
      )
        throw ((t = ur), In(e, 0), dn(e, r), me(e, Y()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ln(e, de, Xe);
          break;
        case 3:
          if (
            (dn(e, r), (r & 130023424) === r && ((n = Au + 500 - Y()), 10 < n))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Li(Ln.bind(null, e, de, Xe), n);
            break;
          }
          Ln(e, de, Xe);
          break;
        case 4:
          if ((dn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Ie(r);
            (i = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Li(Ln.bind(null, e, de, Xe), r);
            break;
          }
          Ln(e, de, Xe);
          break;
        case 5:
          Ln(e, de, Xe);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === t ? wc.bind(null, e) : null;
}
function Xi(e, n) {
  var t = $t;
  return (
    e.current.memoizedState.isDehydrated && (In(e, n).flags |= 256),
    (e = cl(e, n)),
    e !== 2 && ((n = de), (de = t), n !== null && Ji(n)),
    e
  );
}
function Ji(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function op(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function dn(e, n) {
  for (
    n &= ~Uu,
      n &= ~xl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Ie(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function sa(e) {
  if (D & 6) throw Error(S(327));
  at();
  var n = Kr(e, 0);
  if (!(n & 1)) return me(e, Y()), null;
  var t = cl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Ei(e);
    r !== 0 && ((n = r), (t = Xi(e, r)));
  }
  if (t === 1) throw ((t = ur), In(e, 0), dn(e, n), me(e, Y()), t);
  if (t === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Ln(e, de, Xe),
    me(e, Y()),
    null
  );
}
function $u(e, n) {
  var t = D;
  D |= 1;
  try {
    return e(n);
  } finally {
    (D = t), D === 0 && ((ht = Y() + 500), wl && Nn());
  }
}
function $n(e) {
  vn !== null && vn.tag === 0 && !(D & 6) && at();
  var n = D;
  D |= 1;
  var t = Pe.transition,
    r = I;
  try {
    if (((Pe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Pe.transition = t), (D = n), !(D & 6) && Nn();
  }
}
function Vu() {
  (ge = tt.current), U(tt);
}
function In(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), jd(t)), G !== null))
    for (t = G.return; t !== null; ) {
      var r = t;
      switch ((ku(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jr();
          break;
        case 3:
          pt(), U(ve), U(oe), Lu();
          break;
        case 5:
          zu(r);
          break;
        case 4:
          pt();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          _u(r.type._context);
          break;
        case 22:
        case 23:
          Vu();
      }
      t = t.return;
    }
  if (
    ((b = e),
    (G = e = En(e.current, null)),
    (te = ge = n),
    (X = 0),
    (ur = null),
    (Uu = xl = An = 0),
    (de = $t = null),
    On !== null)
  ) {
    for (n = 0; n < On.length; n++)
      if (((t = On[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = l), (r.next = u);
        }
        t.pending = r;
      }
    On = null;
  }
  return e;
}
function Sc(e, n) {
  do {
    var t = G;
    try {
      if ((Cu(), (Fr.current = ul), il)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Un = 0),
        (q = Z = B = null),
        (Ut = !1),
        (rr = 0),
        (ju.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (ur = n), (G = null);
        break;
      }
      e: {
        var i = e,
          u = t.return,
          a = t,
          o = n;
        if (
          ((n = te),
          (a.flags |= 32768),
          o !== null && typeof o == 'object' && typeof o.then == 'function')
        ) {
          var c = o,
            p = a,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var w = Xo(u);
          if (w !== null) {
            (w.flags &= -257),
              Jo(w, u, a, i, n),
              w.mode & 1 && Zo(i, c, n),
              (n = w),
              (o = c);
            var y = n.updateQueue;
            if (y === null) {
              var m = new Set();
              m.add(o), (n.updateQueue = m);
            } else y.add(o);
            break e;
          } else {
            if (!(n & 1)) {
              Zo(i, c, n), Bu();
              break e;
            }
            o = Error(S(426));
          }
        } else if ($ && a.mode & 1) {
          var L = Xo(u);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Jo(L, u, a, i, n),
              Eu(vt(o, a));
            break e;
          }
        }
        (i = o = vt(o, a)),
          X !== 4 && (X = 2),
          $t === null ? ($t = [i]) : $t.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var d = rc(i, o, n);
              Ho(i, d);
              break e;
            case 1:
              a = o;
              var s = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof s.getDerivedStateFromError == 'function' ||
                  (f !== null &&
                    typeof f.componentDidCatch == 'function' &&
                    (Sn === null || !Sn.has(f))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var g = lc(i, a, n);
                Ho(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      xc(t);
    } catch (E) {
      (n = E), G === t && t !== null && (G = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function kc() {
  var e = ol.current;
  return (ol.current = ul), e === null ? ul : e;
}
function Bu() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    b === null || (!(An & 268435455) && !(xl & 268435455)) || dn(b, te);
}
function cl(e, n) {
  var t = D;
  D |= 2;
  var r = kc();
  (b !== e || te !== n) && ((Xe = null), In(e, n));
  do
    try {
      ap();
      break;
    } catch (l) {
      Sc(e, l);
    }
  while (!0);
  if ((Cu(), (D = t), (ol.current = r), G !== null)) throw Error(S(261));
  return (b = null), (te = 0), X;
}
function ap() {
  for (; G !== null; ) Ec(G);
}
function sp() {
  for (; G !== null && !If(); ) Ec(G);
}
function Ec(e) {
  var n = _c(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    n === null ? xc(e) : (G = n),
    (ju.current = null);
}
function xc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = tp(t, n)), t !== null)) {
        (t.flags &= 32767), (G = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (G = null);
        return;
      }
    } else if (((t = np(t, n, ge)), t !== null)) {
      G = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      G = n;
      return;
    }
    G = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function Ln(e, n, t) {
  var r = I,
    l = Pe.transition;
  try {
    (Pe.transition = null), (I = 1), cp(e, n, t, r);
  } finally {
    (Pe.transition = l), (I = r);
  }
  return null;
}
function cp(e, n, t, r) {
  do at();
  while (vn !== null);
  if (D & 6) throw Error(S(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Wf(e, i),
    e === b && ((G = b = null), (te = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      Tr ||
      ((Tr = !0),
      Pc(Qr, function () {
        return at(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = Pe.transition), (Pe.transition = null);
    var u = I;
    I = 1;
    var a = D;
    (D |= 4),
      (ju.current = null),
      lp(e, t),
      gc(t, e),
      Ld(Ti),
      (Yr = !!Ni),
      (Ti = Ni = null),
      (e.current = t),
      ip(t),
      Rf(),
      (D = a),
      (I = u),
      (Pe.transition = i);
  } else e.current = t;
  if (
    (Tr && ((Tr = !1), (vn = e), (sl = l)),
    (i = e.pendingLanes),
    i === 0 && (Sn = null),
    Uf(t.stateNode),
    me(e, Y()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = Gi), (Gi = null), e);
  return (
    sl & 1 && e.tag !== 0 && at(),
    (i = e.pendingLanes),
    i & 1 ? (e === Zi ? Vt++ : ((Vt = 0), (Zi = e))) : (Vt = 0),
    Nn(),
    null
  );
}
function at() {
  if (vn !== null) {
    var e = rs(sl),
      n = Pe.transition,
      t = I;
    try {
      if (((Pe.transition = null), (I = 16 > e ? 16 : e), vn === null))
        var r = !1;
      else {
        if (((e = vn), (vn = null), (sl = 0), D & 6)) throw Error(S(331));
        var l = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var i = C,
            u = i.child;
          if (C.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var c = a[o];
                for (C = c; C !== null; ) {
                  var p = C;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      At(8, p, i);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (C = v);
                  else
                    for (; C !== null; ) {
                      p = C;
                      var h = p.sibling,
                        w = p.return;
                      if ((vc(p), p === c)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (C = h);
                        break;
                      }
                      C = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var m = y.child;
                if (m !== null) {
                  y.child = null;
                  do {
                    var L = m.sibling;
                    (m.sibling = null), (m = L);
                  } while (m !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (C = u);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    At(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (C = d);
                break e;
              }
              C = i.return;
            }
        }
        var s = e.current;
        for (C = s; C !== null; ) {
          u = C;
          var f = u.child;
          if (u.subtreeFlags & 2064 && f !== null) (f.return = u), (C = f);
          else
            e: for (u = s; C !== null; ) {
              if (((a = C), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      El(9, a);
                  }
                } catch (E) {
                  W(a, a.return, E);
                }
              if (a === u) {
                C = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (C = g);
                break e;
              }
              C = a.return;
            }
        }
        if (
          ((D = l), Nn(), Ke && typeof Ke.onPostCommitFiberRoot == 'function')
        )
          try {
            Ke.onPostCommitFiberRoot(vl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = t), (Pe.transition = n);
    }
  }
  return !1;
}
function ca(e, n, t) {
  (n = vt(t, n)),
    (n = rc(e, n, 1)),
    (e = wn(e, n, 1)),
    (n = se()),
    e !== null && (ar(e, 1, n), me(e, n));
}
function W(e, n, t) {
  if (e.tag === 3) ca(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        ca(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = vt(t, e)),
            (e = lc(n, e, 1)),
            (n = wn(n, e, 1)),
            (e = se()),
            n !== null && (ar(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function fp(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = se()),
    (e.pingedLanes |= e.suspendedLanes & t),
    b === e &&
      (te & t) === t &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > Y() - Au)
        ? In(e, 0)
        : (Uu |= t)),
    me(e, n);
}
function Cc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = yr), (yr <<= 1), !(yr & 130023424) && (yr = 4194304))
      : (n = 1));
  var t = se();
  (e = ln(e, n)), e !== null && (ar(e, n, t), me(e, t));
}
function dp(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Cc(e, t);
}
function pp(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(n), Cc(e, t);
}
var _c;
_c = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ve.current) pe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (pe = !1), ep(e, n, t);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), $ && n.flags & 1048576 && zs(n, el, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Ur(e, n), (e = n.pendingProps);
      var l = ct(n, oe.current);
      ot(n, t), (l = Ou(null, n, r, e, l, t));
      var i = Du();
      return (
        (n.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            he(r) ? ((i = !0), qr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Nu(n),
            (l.updater = kl),
            (n.stateNode = l),
            (l._reactInternals = n),
            ji(n, r, e, t),
            (n = $i(null, n, r, !0, i, t)))
          : ((n.tag = 0), $ && i && Su(n), ae(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Ur(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = hp(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            n = Ai(null, n, r, e, t);
            break e;
          case 1:
            n = ea(null, n, r, e, t);
            break e;
          case 11:
            n = qo(null, n, r, e, t);
            break e;
          case 14:
            n = bo(null, n, r, Le(r.type, e), t);
            break e;
        }
        throw Error(S(306, r, ''));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        Ai(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        ea(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((ac(n), e === null)) throw Error(S(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          Rs(e, n),
          rl(n, r, null, t);
        var u = n.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = vt(Error(S(423)), n)), (n = na(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = vt(Error(S(424)), n)), (n = na(e, n, r, t, l));
            break e;
          } else
            for (
              ye = yn(n.stateNode.containerInfo.firstChild),
                we = n,
                $ = !0,
                Oe = null,
                t = Ds(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((ft(), r === l)) {
            n = un(e, n, t);
            break e;
          }
          ae(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Fs(n),
        e === null && Ii(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = l.children),
        zi(r, l) ? (u = null) : i !== null && zi(r, i) && (n.flags |= 32),
        oc(e, n),
        ae(e, n, u, t),
        n.child
      );
    case 6:
      return e === null && Ii(n), null;
    case 13:
      return sc(e, n, t);
    case 4:
      return (
        Tu(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = dt(n, null, r, t)) : ae(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        qo(e, n, r, l, t)
      );
    case 7:
      return ae(e, n, n.pendingProps, t), n.child;
    case 8:
      return ae(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ae(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (u = l.value),
          F(nl, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (Fe(i.value, u)) {
            if (i.children === l.children && !ve.current) {
              n = un(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                u = i.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (i.tag === 1) {
                      (o = en(-1, t & -t)), (o.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (o.next = o)
                          : ((o.next = p.next), (p.next = o)),
                          (c.pending = o);
                      }
                    }
                    (i.lanes |= t),
                      (o = i.alternate),
                      o !== null && (o.lanes |= t),
                      Ri(i.return, t, n),
                      (a.lanes |= t);
                    break;
                  }
                  o = o.next;
                }
              } else if (i.tag === 10) u = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(S(341));
                (u.lanes |= t),
                  (a = u.alternate),
                  a !== null && (a.lanes |= t),
                  Ri(u, t, n),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        ae(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        ot(n, t),
        (l = Ne(l)),
        (r = r(l)),
        (n.flags |= 1),
        ae(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Le(r, n.pendingProps)),
        (l = Le(r.type, l)),
        bo(e, n, r, l, t)
      );
    case 15:
      return ic(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        Ur(e, n),
        (n.tag = 1),
        he(r) ? ((e = !0), qr(n)) : (e = !1),
        ot(n, t),
        tc(n, r, l),
        ji(n, r, l, t),
        $i(null, n, r, !0, e, t)
      );
    case 19:
      return cc(e, n, t);
    case 22:
      return uc(e, n, t);
  }
  throw Error(S(156, n.tag));
};
function Pc(e, n) {
  return ba(e, n);
}
function vp(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _e(e, n, t, r) {
  return new vp(e, n, t, r);
}
function Hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hp(e) {
  if (typeof e == 'function') return Hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === su) return 14;
  }
  return 2;
}
function En(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = _e(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Vr(e, n, t, r, l, i) {
  var u = 2;
  if (((r = e), typeof e == 'function')) Hu(e) && (u = 1);
  else if (typeof e == 'string') u = 5;
  else
    e: switch (e) {
      case Kn:
        return Rn(t.children, l, i, n);
      case ou:
        (u = 8), (l |= 8);
        break;
      case oi:
        return (
          (e = _e(12, t, n, l | 2)), (e.elementType = oi), (e.lanes = i), e
        );
      case ai:
        return (e = _e(13, t, n, l)), (e.elementType = ai), (e.lanes = i), e;
      case si:
        return (e = _e(19, t, n, l)), (e.elementType = si), (e.lanes = i), e;
      case Fa:
        return Cl(t, l, i, n);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ia:
              u = 10;
              break e;
            case Ra:
              u = 9;
              break e;
            case au:
              u = 11;
              break e;
            case su:
              u = 14;
              break e;
            case sn:
              (u = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ''));
    }
  return (
    (n = _e(u, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function Rn(e, n, t, r) {
  return (e = _e(7, e, r, n)), (e.lanes = t), e;
}
function Cl(e, n, t, r) {
  return (
    (e = _e(22, e, r, n)),
    (e.elementType = Fa),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ti(e, n, t) {
  return (e = _e(6, e, null, n)), (e.lanes = t), e;
}
function ri(e, n, t) {
  return (
    (n = _e(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    n
  );
}
function mp(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, n, t, r, l, i, u, a, o) {
  return (
    (e = new mp(e, n, t, a, o)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = _e(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Nu(i),
    e
  );
}
function gp(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: n,
    implementation: t
  };
}
function Nc(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (Bn(e) !== e || e.tag !== 1) throw Error(S(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (he(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (he(t)) return Ns(e, t, n);
  }
  return n;
}
function Tc(e, n, t, r, l, i, u, a, o) {
  return (
    (e = Wu(t, r, !0, e, l, i, u, a, o)),
    (e.context = Nc(null)),
    (t = e.current),
    (r = se()),
    (l = kn(t)),
    (i = en(r, l)),
    (i.callback = n ?? null),
    wn(t, i, l),
    (e.current.lanes = l),
    ar(e, l, r),
    me(e, r),
    e
  );
}
function _l(e, n, t, r) {
  var l = n.current,
    i = se(),
    u = kn(l);
  return (
    (t = Nc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = en(i, u)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = wn(l, n, u)),
    e !== null && (Re(e, l, u, i), Rr(e, l, u)),
    u
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fa(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Qu(e, n) {
  fa(e, n), (e = e.alternate) && fa(e, n);
}
function yp() {
  return null;
}
var zc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ku(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Ku.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(S(409));
  _l(e, n, null, null);
};
Pl.prototype.unmount = Ku.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    $n(function () {
      _l(null, e, null, null);
    }),
      (n[rn] = null);
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = us();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < fn.length && n !== 0 && n < fn[t].priority; t++);
    fn.splice(t, 0, e), t === 0 && as(e);
  }
};
function Yu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function da() {}
function wp(e, n, t, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = fl(u);
        i.call(c);
      };
    }
    var u = Tc(n, r, e, 0, null, !1, !1, '', da);
    return (
      (e._reactRootContainer = u),
      (e[rn] = u.current),
      qt(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var c = fl(o);
      a.call(c);
    };
  }
  var o = Wu(e, 0, !1, null, null, !1, !1, '', da);
  return (
    (e._reactRootContainer = o),
    (e[rn] = o.current),
    qt(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      _l(n, o, t, r);
    }),
    o
  );
}
function Tl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var o = fl(u);
        a.call(o);
      };
    }
    _l(n, u, e, l);
  } else u = wp(t, n, e, l, r);
  return fl(u);
}
ls = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Mt(n.pendingLanes);
        t !== 0 &&
          (du(n, t | 1), me(n, Y()), !(D & 6) && ((ht = Y() + 500), Nn()));
      }
      break;
    case 13:
      $n(function () {
        var r = ln(e, 1);
        if (r !== null) {
          var l = se();
          Re(r, e, 1, l);
        }
      }),
        Qu(e, 1);
  }
};
pu = function (e) {
  if (e.tag === 13) {
    var n = ln(e, 134217728);
    if (n !== null) {
      var t = se();
      Re(n, e, 134217728, t);
    }
    Qu(e, 134217728);
  }
};
is = function (e) {
  if (e.tag === 13) {
    var n = kn(e),
      t = ln(e, n);
    if (t !== null) {
      var r = se();
      Re(t, e, n, r);
    }
    Qu(e, n);
  }
};
us = function () {
  return I;
};
os = function (e, n) {
  var t = I;
  try {
    return (I = e), n();
  } finally {
    I = t;
  }
};
wi = function (e, n, t) {
  switch (n) {
    case 'input':
      if ((di(e, t), (n = t.name), t.type === 'radio' && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(S(90));
            Ua(r), di(r, l);
          }
        }
      }
      break;
    case 'textarea':
      $a(e, t);
      break;
    case 'select':
      (n = t.value), n != null && rt(e, !!t.multiple, n, !1);
  }
};
Ya = $u;
Ga = $n;
var Sp = { usingClientEntryPoint: !1, Events: [cr, Xn, yl, Qa, Ka, $u] },
  Tt = {
    findFiberByHostInstance: Mn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  kp = {
    bundleType: Tt.bundleType,
    version: Tt.version,
    rendererPackageName: Tt.rendererPackageName,
    rendererConfig: Tt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ja(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tt.findFiberByHostInstance || yp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      (vl = zr.inject(kp)), (Ke = zr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
ke.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yu(n)) throw Error(S(200));
  return gp(e, n, null, t);
};
ke.createRoot = function (e, n) {
  if (!Yu(e)) throw Error(S(299));
  var t = !1,
    r = '',
    l = zc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Wu(e, 1, !1, null, null, t, !1, r, l)),
    (e[rn] = n.current),
    qt(e.nodeType === 8 ? e.parentNode : e),
    new Ku(n)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == 'function'
      ? Error(S(188))
      : ((e = Object.keys(e).join(',')), Error(S(268, e)));
  return (e = Ja(n)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return $n(e);
};
ke.hydrate = function (e, n, t) {
  if (!Nl(n)) throw Error(S(200));
  return Tl(null, e, n, !0, t);
};
ke.hydrateRoot = function (e, n, t) {
  if (!Yu(e)) throw Error(S(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = '',
    u = zc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (n = Tc(n, null, e, 1, t ?? null, l, !1, i, u)),
    (e[rn] = n.current),
    qt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new Pl(n);
};
ke.render = function (e, n, t) {
  if (!Nl(n)) throw Error(S(200));
  return Tl(null, e, n, !1, t);
};
ke.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? ($n(function () {
        Tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rn] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = $u;
ke.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!Nl(t)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Tl(e, n, t, !1, r);
};
ke.version = '18.3.1-next-f1338f8080-20240426';
function Lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc);
    } catch (e) {
      console.error(e);
    }
}
Lc(), (La.exports = ke);
var Ep = La.exports,
  pa = Ep;
(ii.createRoot = pa.createRoot), (ii.hydrateRoot = pa.hydrateRoot);
var Mc = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: 'normal',
    autoplay: !0,
    timelineOffset: 0
  },
  Gu = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0
  },
  xp = [
    'translateX',
    'translateY',
    'translateZ',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scale',
    'scaleX',
    'scaleY',
    'scaleZ',
    'skew',
    'skewX',
    'skewY',
    'perspective',
    'matrix',
    'matrix3d'
  ],
  dl = { CSS: {}, springs: {} };
function We(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function Bt(e, n) {
  return e.indexOf(n) > -1;
}
function li(e, n) {
  return e.apply(null, n);
}
var T = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return Bt(Object.prototype.toString.call(e), 'Object');
  },
  pth: function (e) {
    return T.obj(e) && e.hasOwnProperty('totalLength');
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || T.svg(e);
  },
  str: function (e) {
    return typeof e == 'string';
  },
  fnc: function (e) {
    return typeof e == 'function';
  },
  und: function (e) {
    return typeof e > 'u';
  },
  nil: function (e) {
    return T.und(e) || e === null;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return T.hex(e) || T.rgb(e) || T.hsl(e);
  },
  key: function (e) {
    return (
      !Mc.hasOwnProperty(e) &&
      !Gu.hasOwnProperty(e) &&
      e !== 'targets' &&
      e !== 'keyframes'
    );
  }
};
function Oc(e) {
  var n = /\(([^)]+)\)/.exec(e);
  return n
    ? n[1].split(',').map(function (t) {
        return parseFloat(t);
      })
    : [];
}
function Dc(e, n) {
  var t = Oc(e),
    r = We(T.und(t[0]) ? 1 : t[0], 0.1, 100),
    l = We(T.und(t[1]) ? 100 : t[1], 0.1, 100),
    i = We(T.und(t[2]) ? 10 : t[2], 0.1, 100),
    u = We(T.und(t[3]) ? 0 : t[3], 0.1, 100),
    a = Math.sqrt(l / r),
    o = i / (2 * Math.sqrt(l * r)),
    c = o < 1 ? a * Math.sqrt(1 - o * o) : 0,
    p = 1,
    v = o < 1 ? (o * a + -u) / c : -u + a;
  function h(y) {
    var m = n ? (n * y) / 1e3 : y;
    return (
      o < 1
        ? (m =
            Math.exp(-m * o * a) * (p * Math.cos(c * m) + v * Math.sin(c * m)))
        : (m = (p + v * m) * Math.exp(-m * a)),
      y === 0 || y === 1 ? y : 1 - m
    );
  }
  function w() {
    var y = dl.springs[e];
    if (y) return y;
    for (var m = 1 / 6, L = 0, d = 0; ; )
      if (((L += m), h(L) === 1)) {
        if ((d++, d >= 16)) break;
      } else d = 0;
    var s = L * m * 1e3;
    return (dl.springs[e] = s), s;
  }
  return n ? h : w;
}
function Cp(e) {
  return (
    e === void 0 && (e = 10),
    function (n) {
      return Math.ceil(We(n, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var _p = (function () {
    var e = 11,
      n = 1 / (e - 1);
    function t(p, v) {
      return 1 - 3 * v + 3 * p;
    }
    function r(p, v) {
      return 3 * v - 6 * p;
    }
    function l(p) {
      return 3 * p;
    }
    function i(p, v, h) {
      return ((t(v, h) * p + r(v, h)) * p + l(v)) * p;
    }
    function u(p, v, h) {
      return 3 * t(v, h) * p * p + 2 * r(v, h) * p + l(v);
    }
    function a(p, v, h, w, y) {
      var m,
        L,
        d = 0;
      do (L = v + (h - v) / 2), (m = i(L, w, y) - p), m > 0 ? (h = L) : (v = L);
      while (Math.abs(m) > 1e-7 && ++d < 10);
      return L;
    }
    function o(p, v, h, w) {
      for (var y = 0; y < 4; ++y) {
        var m = u(v, h, w);
        if (m === 0) return v;
        var L = i(v, h, w) - p;
        v -= L / m;
      }
      return v;
    }
    function c(p, v, h, w) {
      if (!(0 <= p && p <= 1 && 0 <= h && h <= 1)) return;
      var y = new Float32Array(e);
      if (p !== v || h !== w) for (var m = 0; m < e; ++m) y[m] = i(m * n, p, h);
      function L(d) {
        for (var s = 0, f = 1, g = e - 1; f !== g && y[f] <= d; ++f) s += n;
        --f;
        var E = (d - y[f]) / (y[f + 1] - y[f]),
          k = s + E * n,
          _ = u(k, p, h);
        return _ >= 0.001 ? o(d, k, p, h) : _ === 0 ? k : a(d, s, s + n, p, h);
      }
      return function (d) {
        return (p === v && h === w) || d === 0 || d === 1 ? d : i(L(d), v, w);
      };
    }
    return c;
  })(),
  Ic = (function () {
    var e = {
        linear: function () {
          return function (r) {
            return r;
          };
        }
      },
      n = {
        Sine: function () {
          return function (r) {
            return 1 - Math.cos((r * Math.PI) / 2);
          };
        },
        Expo: function () {
          return function (r) {
            return r ? Math.pow(2, 10 * r - 10) : 0;
          };
        },
        Circ: function () {
          return function (r) {
            return 1 - Math.sqrt(1 - r * r);
          };
        },
        Back: function () {
          return function (r) {
            return r * r * (3 * r - 2);
          };
        },
        Bounce: function () {
          return function (r) {
            for (var l, i = 4; r < ((l = Math.pow(2, --i)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - i) -
              7.5625 * Math.pow((l * 3 - 2) / 22 - r, 2)
            );
          };
        },
        Elastic: function (r, l) {
          r === void 0 && (r = 1), l === void 0 && (l = 0.5);
          var i = We(r, 1, 10),
            u = We(l, 0.1, 2);
          return function (a) {
            return a === 0 || a === 1
              ? a
              : -i *
                  Math.pow(2, 10 * (a - 1)) *
                  Math.sin(
                    ((a - 1 - (u / (Math.PI * 2)) * Math.asin(1 / i)) *
                      (Math.PI * 2)) /
                      u
                  );
          };
        }
      },
      t = ['Quad', 'Cubic', 'Quart', 'Quint'];
    return (
      t.forEach(function (r, l) {
        n[r] = function () {
          return function (i) {
            return Math.pow(i, l + 2);
          };
        };
      }),
      Object.keys(n).forEach(function (r) {
        var l = n[r];
        (e['easeIn' + r] = l),
          (e['easeOut' + r] = function (i, u) {
            return function (a) {
              return 1 - l(i, u)(1 - a);
            };
          }),
          (e['easeInOut' + r] = function (i, u) {
            return function (a) {
              return a < 0.5 ? l(i, u)(a * 2) / 2 : 1 - l(i, u)(a * -2 + 2) / 2;
            };
          }),
          (e['easeOutIn' + r] = function (i, u) {
            return function (a) {
              return a < 0.5
                ? (1 - l(i, u)(1 - a * 2)) / 2
                : (l(i, u)(a * 2 - 1) + 1) / 2;
            };
          });
      }),
      e
    );
  })();
function Zu(e, n) {
  if (T.fnc(e)) return e;
  var t = e.split('(')[0],
    r = Ic[t],
    l = Oc(e);
  switch (t) {
    case 'spring':
      return Dc(e, n);
    case 'cubicBezier':
      return li(_p, l);
    case 'steps':
      return li(Cp, l);
    default:
      return li(r, l);
  }
}
function Rc(e) {
  try {
    var n = document.querySelectorAll(e);
    return n;
  } catch {
    return;
  }
}
function zl(e, n) {
  for (
    var t = e.length,
      r = arguments.length >= 2 ? arguments[1] : void 0,
      l = [],
      i = 0;
    i < t;
    i++
  )
    if (i in e) {
      var u = e[i];
      n.call(r, u, i, e) && l.push(u);
    }
  return l;
}
function Ll(e) {
  return e.reduce(function (n, t) {
    return n.concat(T.arr(t) ? Ll(t) : t);
  }, []);
}
function va(e) {
  return T.arr(e)
    ? e
    : (T.str(e) && (e = Rc(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection
        ? [].slice.call(e)
        : [e]);
}
function Xu(e, n) {
  return e.some(function (t) {
    return t === n;
  });
}
function Ju(e) {
  var n = {};
  for (var t in e) n[t] = e[t];
  return n;
}
function qi(e, n) {
  var t = Ju(e);
  for (var r in e) t[r] = n.hasOwnProperty(r) ? n[r] : e[r];
  return t;
}
function Ml(e, n) {
  var t = Ju(e);
  for (var r in n) t[r] = T.und(e[r]) ? n[r] : e[r];
  return t;
}
function Pp(e) {
  var n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return n ? 'rgba(' + n[1] + ',1)' : e;
}
function Np(e) {
  var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    t = e.replace(n, function (a, o, c, p) {
      return o + o + c + c + p + p;
    }),
    r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
    l = parseInt(r[1], 16),
    i = parseInt(r[2], 16),
    u = parseInt(r[3], 16);
  return 'rgba(' + l + ',' + i + ',' + u + ',1)';
}
function Tp(e) {
  var n =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
    t = parseInt(n[1], 10) / 360,
    r = parseInt(n[2], 10) / 100,
    l = parseInt(n[3], 10) / 100,
    i = n[4] || 1;
  function u(h, w, y) {
    return (
      y < 0 && (y += 1),
      y > 1 && (y -= 1),
      y < 1 / 6
        ? h + (w - h) * 6 * y
        : y < 1 / 2
        ? w
        : y < 2 / 3
        ? h + (w - h) * (2 / 3 - y) * 6
        : h
    );
  }
  var a, o, c;
  if (r == 0) a = o = c = l;
  else {
    var p = l < 0.5 ? l * (1 + r) : l + r - l * r,
      v = 2 * l - p;
    (a = u(v, p, t + 1 / 3)), (o = u(v, p, t)), (c = u(v, p, t - 1 / 3));
  }
  return 'rgba(' + a * 255 + ',' + o * 255 + ',' + c * 255 + ',' + i + ')';
}
function zp(e) {
  if (T.rgb(e)) return Pp(e);
  if (T.hex(e)) return Np(e);
  if (T.hsl(e)) return Tp(e);
}
function nn(e) {
  var n =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e
    );
  if (n) return n[1];
}
function Lp(e) {
  if (Bt(e, 'translate') || e === 'perspective') return 'px';
  if (Bt(e, 'rotate') || Bt(e, 'skew')) return 'deg';
}
function bi(e, n) {
  return T.fnc(e) ? e(n.target, n.id, n.total) : e;
}
function Qe(e, n) {
  return e.getAttribute(n);
}
function qu(e, n, t) {
  var r = nn(n);
  if (Xu([t, 'deg', 'rad', 'turn'], r)) return n;
  var l = dl.CSS[n + t];
  if (!T.und(l)) return l;
  var i = 100,
    u = document.createElement(e.tagName),
    a =
      e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  a.appendChild(u), (u.style.position = 'absolute'), (u.style.width = i + t);
  var o = i / u.offsetWidth;
  a.removeChild(u);
  var c = o * parseFloat(n);
  return (dl.CSS[n + t] = c), c;
}
function Fc(e, n, t) {
  if (n in e.style) {
    var r = n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      l = e.style[n] || getComputedStyle(e).getPropertyValue(r) || '0';
    return t ? qu(e, l, t) : l;
  }
}
function bu(e, n) {
  if (T.dom(e) && !T.inp(e) && (!T.nil(Qe(e, n)) || (T.svg(e) && e[n])))
    return 'attribute';
  if (T.dom(e) && Xu(xp, n)) return 'transform';
  if (T.dom(e) && n !== 'transform' && Fc(e, n)) return 'css';
  if (e[n] != null) return 'object';
}
function jc(e) {
  if (T.dom(e)) {
    for (
      var n = e.style.transform || '',
        t = /(\w+)\(([^)]*)\)/g,
        r = new Map(),
        l;
      (l = t.exec(n));

    )
      r.set(l[1], l[2]);
    return r;
  }
}
function Mp(e, n, t, r) {
  var l = Bt(n, 'scale') ? 1 : 0 + Lp(n),
    i = jc(e).get(n) || l;
  return (
    t && (t.transforms.list.set(n, i), (t.transforms.last = n)),
    r ? qu(e, i, r) : i
  );
}
function eo(e, n, t, r) {
  switch (bu(e, n)) {
    case 'transform':
      return Mp(e, n, r, t);
    case 'css':
      return Fc(e, n, t);
    case 'attribute':
      return Qe(e, n);
    default:
      return e[n] || 0;
  }
}
function no(e, n) {
  var t = /^(\*=|\+=|-=)/.exec(e);
  if (!t) return e;
  var r = nn(e) || 0,
    l = parseFloat(n),
    i = parseFloat(e.replace(t[0], ''));
  switch (t[0][0]) {
    case '+':
      return l + i + r;
    case '-':
      return l - i + r;
    case '*':
      return l * i + r;
  }
}
function Uc(e, n) {
  if (T.col(e)) return zp(e);
  if (/\s/g.test(e)) return e;
  var t = nn(e),
    r = t ? e.substr(0, e.length - t.length) : e;
  return n ? r + n : r;
}
function to(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Op(e) {
  return Math.PI * 2 * Qe(e, 'r');
}
function Dp(e) {
  return Qe(e, 'width') * 2 + Qe(e, 'height') * 2;
}
function Ip(e) {
  return to(
    { x: Qe(e, 'x1'), y: Qe(e, 'y1') },
    { x: Qe(e, 'x2'), y: Qe(e, 'y2') }
  );
}
function Ac(e) {
  for (var n = e.points, t = 0, r, l = 0; l < n.numberOfItems; l++) {
    var i = n.getItem(l);
    l > 0 && (t += to(r, i)), (r = i);
  }
  return t;
}
function Rp(e) {
  var n = e.points;
  return Ac(e) + to(n.getItem(n.numberOfItems - 1), n.getItem(0));
}
function $c(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case 'circle':
      return Op(e);
    case 'rect':
      return Dp(e);
    case 'line':
      return Ip(e);
    case 'polyline':
      return Ac(e);
    case 'polygon':
      return Rp(e);
  }
}
function Fp(e) {
  var n = $c(e);
  return e.setAttribute('stroke-dasharray', n), n;
}
function jp(e) {
  for (var n = e.parentNode; T.svg(n) && T.svg(n.parentNode); )
    n = n.parentNode;
  return n;
}
function Vc(e, n) {
  var t = n || {},
    r = t.el || jp(e),
    l = r.getBoundingClientRect(),
    i = Qe(r, 'viewBox'),
    u = l.width,
    a = l.height,
    o = t.viewBox || (i ? i.split(' ') : [0, 0, u, a]);
  return {
    el: r,
    viewBox: o,
    x: o[0] / 1,
    y: o[1] / 1,
    w: u,
    h: a,
    vW: o[2],
    vH: o[3]
  };
}
function Up(e, n) {
  var t = T.str(e) ? Rc(e)[0] : e,
    r = n || 100;
  return function (l) {
    return { property: l, el: t, svg: Vc(t), totalLength: $c(t) * (r / 100) };
  };
}
function Ap(e, n, t) {
  function r(p) {
    p === void 0 && (p = 0);
    var v = n + p >= 1 ? n + p : 0;
    return e.el.getPointAtLength(v);
  }
  var l = Vc(e.el, e.svg),
    i = r(),
    u = r(-1),
    a = r(1),
    o = t ? 1 : l.w / l.vW,
    c = t ? 1 : l.h / l.vH;
  switch (e.property) {
    case 'x':
      return (i.x - l.x) * o;
    case 'y':
      return (i.y - l.y) * c;
    case 'angle':
      return (Math.atan2(a.y - u.y, a.x - u.x) * 180) / Math.PI;
  }
}
function ha(e, n) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    r = Uc(T.pth(e) ? e.totalLength : e, n) + '';
  return {
    original: r,
    numbers: r.match(t) ? r.match(t).map(Number) : [0],
    strings: T.str(e) || n ? r.split(t) : []
  };
}
function ro(e) {
  var n = e ? Ll(T.arr(e) ? e.map(va) : va(e)) : [];
  return zl(n, function (t, r, l) {
    return l.indexOf(t) === r;
  });
}
function Bc(e) {
  var n = ro(e);
  return n.map(function (t, r) {
    return { target: t, id: r, total: n.length, transforms: { list: jc(t) } };
  });
}
function $p(e, n) {
  var t = Ju(n);
  if ((/^spring/.test(t.easing) && (t.duration = Dc(t.easing)), T.arr(e))) {
    var r = e.length,
      l = r === 2 && !T.obj(e[0]);
    l ? (e = { value: e }) : T.fnc(n.duration) || (t.duration = n.duration / r);
  }
  var i = T.arr(e) ? e : [e];
  return i
    .map(function (u, a) {
      var o = T.obj(u) && !T.pth(u) ? u : { value: u };
      return (
        T.und(o.delay) && (o.delay = a ? 0 : n.delay),
        T.und(o.endDelay) && (o.endDelay = a === i.length - 1 ? n.endDelay : 0),
        o
      );
    })
    .map(function (u) {
      return Ml(u, t);
    });
}
function Vp(e) {
  for (
    var n = zl(
        Ll(
          e.map(function (i) {
            return Object.keys(i);
          })
        ),
        function (i) {
          return T.key(i);
        }
      ).reduce(function (i, u) {
        return i.indexOf(u) < 0 && i.push(u), i;
      }, []),
      t = {},
      r = function (i) {
        var u = n[i];
        t[u] = e.map(function (a) {
          var o = {};
          for (var c in a)
            T.key(c) ? c == u && (o.value = a[c]) : (o[c] = a[c]);
          return o;
        });
      },
      l = 0;
    l < n.length;
    l++
  )
    r(l);
  return t;
}
function Bp(e, n) {
  var t = [],
    r = n.keyframes;
  r && (n = Ml(Vp(r), n));
  for (var l in n) T.key(l) && t.push({ name: l, tweens: $p(n[l], e) });
  return t;
}
function Hp(e, n) {
  var t = {};
  for (var r in e) {
    var l = bi(e[r], n);
    T.arr(l) &&
      ((l = l.map(function (i) {
        return bi(i, n);
      })),
      l.length === 1 && (l = l[0])),
      (t[r] = l);
  }
  return (
    (t.duration = parseFloat(t.duration)), (t.delay = parseFloat(t.delay)), t
  );
}
function Wp(e, n) {
  var t;
  return e.tweens.map(function (r) {
    var l = Hp(r, n),
      i = l.value,
      u = T.arr(i) ? i[1] : i,
      a = nn(u),
      o = eo(n.target, e.name, a, n),
      c = t ? t.to.original : o,
      p = T.arr(i) ? i[0] : c,
      v = nn(p) || nn(o),
      h = a || v;
    return (
      T.und(u) && (u = c),
      (l.from = ha(p, h)),
      (l.to = ha(no(u, p), h)),
      (l.start = t ? t.end : 0),
      (l.end = l.start + l.delay + l.duration + l.endDelay),
      (l.easing = Zu(l.easing, l.duration)),
      (l.isPath = T.pth(i)),
      (l.isPathTargetInsideSVG = l.isPath && T.svg(n.target)),
      (l.isColor = T.col(l.from.original)),
      l.isColor && (l.round = 1),
      (t = l),
      l
    );
  });
}
var Hc = {
  css: function (e, n, t) {
    return (e.style[n] = t);
  },
  attribute: function (e, n, t) {
    return e.setAttribute(n, t);
  },
  object: function (e, n, t) {
    return (e[n] = t);
  },
  transform: function (e, n, t, r, l) {
    if ((r.list.set(n, t), n === r.last || l)) {
      var i = '';
      r.list.forEach(function (u, a) {
        i += a + '(' + u + ') ';
      }),
        (e.style.transform = i);
    }
  }
};
function Wc(e, n) {
  var t = Bc(e);
  t.forEach(function (r) {
    for (var l in n) {
      var i = bi(n[l], r),
        u = r.target,
        a = nn(i),
        o = eo(u, l, a, r),
        c = a || nn(o),
        p = no(Uc(i, c), o),
        v = bu(u, l);
      Hc[v](u, l, p, r.transforms, !0);
    }
  });
}
function Qp(e, n) {
  var t = bu(e.target, n.name);
  if (t) {
    var r = Wp(n, e),
      l = r[r.length - 1];
    return {
      type: t,
      property: n.name,
      animatable: e,
      tweens: r,
      duration: l.end,
      delay: r[0].delay,
      endDelay: l.endDelay
    };
  }
}
function Kp(e, n) {
  return zl(
    Ll(
      e.map(function (t) {
        return n.map(function (r) {
          return Qp(t, r);
        });
      })
    ),
    function (t) {
      return !T.und(t);
    }
  );
}
function Qc(e, n) {
  var t = e.length,
    r = function (i) {
      return i.timelineOffset ? i.timelineOffset : 0;
    },
    l = {};
  return (
    (l.duration = t
      ? Math.max.apply(
          Math,
          e.map(function (i) {
            return r(i) + i.duration;
          })
        )
      : n.duration),
    (l.delay = t
      ? Math.min.apply(
          Math,
          e.map(function (i) {
            return r(i) + i.delay;
          })
        )
      : n.delay),
    (l.endDelay = t
      ? l.duration -
        Math.max.apply(
          Math,
          e.map(function (i) {
            return r(i) + i.duration - i.endDelay;
          })
        )
      : n.endDelay),
    l
  );
}
var ma = 0;
function Yp(e) {
  var n = qi(Mc, e),
    t = qi(Gu, e),
    r = Bp(t, e),
    l = Bc(e.targets),
    i = Kp(l, r),
    u = Qc(i, t),
    a = ma;
  return (
    ma++,
    Ml(n, {
      id: a,
      children: [],
      animatables: l,
      animations: i,
      duration: u.duration,
      delay: u.delay,
      endDelay: u.endDelay
    })
  );
}
var De = [],
  Kc = (function () {
    var e;
    function n() {
      !e &&
        (!ga() || !Q.suspendWhenDocumentHidden) &&
        De.length > 0 &&
        (e = requestAnimationFrame(t));
    }
    function t(l) {
      for (var i = De.length, u = 0; u < i; ) {
        var a = De[u];
        a.paused ? (De.splice(u, 1), i--) : (a.tick(l), u++);
      }
      e = u > 0 ? requestAnimationFrame(t) : void 0;
    }
    function r() {
      Q.suspendWhenDocumentHidden &&
        (ga()
          ? (e = cancelAnimationFrame(e))
          : (De.forEach(function (l) {
              return l._onDocumentVisibility();
            }),
            Kc()));
    }
    return (
      typeof document < 'u' && document.addEventListener('visibilitychange', r),
      n
    );
  })();
function ga() {
  return !!document && document.hidden;
}
function Q(e) {
  e === void 0 && (e = {});
  var n = 0,
    t = 0,
    r = 0,
    l,
    i = 0,
    u = null;
  function a(s) {
    var f =
      window.Promise &&
      new Promise(function (g) {
        return (u = g);
      });
    return (s.finished = f), f;
  }
  var o = Yp(e);
  a(o);
  function c() {
    var s = o.direction;
    s !== 'alternate' && (o.direction = s !== 'normal' ? 'normal' : 'reverse'),
      (o.reversed = !o.reversed),
      l.forEach(function (f) {
        return (f.reversed = o.reversed);
      });
  }
  function p(s) {
    return o.reversed ? o.duration - s : s;
  }
  function v() {
    (n = 0), (t = p(o.currentTime) * (1 / Q.speed));
  }
  function h(s, f) {
    f && f.seek(s - f.timelineOffset);
  }
  function w(s) {
    if (o.reversePlayback) for (var g = i; g--; ) h(s, l[g]);
    else for (var f = 0; f < i; f++) h(s, l[f]);
  }
  function y(s) {
    for (var f = 0, g = o.animations, E = g.length; f < E; ) {
      var k = g[f],
        _ = k.animatable,
        P = k.tweens,
        R = P.length - 1,
        N = P[R];
      R &&
        (N =
          zl(P, function (Ge) {
            return s < Ge.end;
          })[0] || N);
      for (
        var J = We(s - N.start - N.delay, 0, N.duration) / N.duration,
          je = isNaN(J) ? 1 : N.easing(J),
          ee = N.to.strings,
          Hn = N.round,
          wt = [],
          St = N.to.numbers.length,
          Ue = void 0,
          x = 0;
        x < St;
        x++
      ) {
        var z = void 0,
          M = N.to.numbers[x],
          A = N.from.numbers[x] || 0;
        N.isPath
          ? (z = Ap(N.value, je * M, N.isPathTargetInsideSVG))
          : (z = A + je * (M - A)),
          Hn && ((N.isColor && x > 2) || (z = Math.round(z * Hn) / Hn)),
          wt.push(z);
      }
      var K = ee.length;
      if (!K) Ue = wt[0];
      else {
        Ue = ee[0];
        for (var Ae = 0; Ae < K; Ae++) {
          ee[Ae];
          var $e = ee[Ae + 1],
            Tn = wt[Ae];
          isNaN(Tn) || ($e ? (Ue += Tn + $e) : (Ue += Tn + ' '));
        }
      }
      Hc[k.type](_.target, k.property, Ue, _.transforms),
        (k.currentValue = Ue),
        f++;
    }
  }
  function m(s) {
    o[s] && !o.passThrough && o[s](o);
  }
  function L() {
    o.remaining && o.remaining !== !0 && o.remaining--;
  }
  function d(s) {
    var f = o.duration,
      g = o.delay,
      E = f - o.endDelay,
      k = p(s);
    (o.progress = We((k / f) * 100, 0, 100)),
      (o.reversePlayback = k < o.currentTime),
      l && w(k),
      !o.began && o.currentTime > 0 && ((o.began = !0), m('begin')),
      !o.loopBegan && o.currentTime > 0 && ((o.loopBegan = !0), m('loopBegin')),
      k <= g && o.currentTime !== 0 && y(0),
      ((k >= E && o.currentTime !== f) || !f) && y(f),
      k > g && k < E
        ? (o.changeBegan ||
            ((o.changeBegan = !0), (o.changeCompleted = !1), m('changeBegin')),
          m('change'),
          y(k))
        : o.changeBegan &&
          ((o.changeCompleted = !0), (o.changeBegan = !1), m('changeComplete')),
      (o.currentTime = We(k, 0, f)),
      o.began && m('update'),
      s >= f &&
        ((t = 0),
        L(),
        o.remaining
          ? ((n = r),
            m('loopComplete'),
            (o.loopBegan = !1),
            o.direction === 'alternate' && c())
          : ((o.paused = !0),
            o.completed ||
              ((o.completed = !0),
              m('loopComplete'),
              m('complete'),
              !o.passThrough && 'Promise' in window && (u(), a(o)))));
  }
  return (
    (o.reset = function () {
      var s = o.direction;
      (o.passThrough = !1),
        (o.currentTime = 0),
        (o.progress = 0),
        (o.paused = !0),
        (o.began = !1),
        (o.loopBegan = !1),
        (o.changeBegan = !1),
        (o.completed = !1),
        (o.changeCompleted = !1),
        (o.reversePlayback = !1),
        (o.reversed = s === 'reverse'),
        (o.remaining = o.loop),
        (l = o.children),
        (i = l.length);
      for (var f = i; f--; ) o.children[f].reset();
      ((o.reversed && o.loop !== !0) || (s === 'alternate' && o.loop === 1)) &&
        o.remaining++,
        y(o.reversed ? o.duration : 0);
    }),
    (o._onDocumentVisibility = v),
    (o.set = function (s, f) {
      return Wc(s, f), o;
    }),
    (o.tick = function (s) {
      (r = s), n || (n = r), d((r + (t - n)) * Q.speed);
    }),
    (o.seek = function (s) {
      d(p(s));
    }),
    (o.pause = function () {
      (o.paused = !0), v();
    }),
    (o.play = function () {
      o.paused &&
        (o.completed && o.reset(), (o.paused = !1), De.push(o), v(), Kc());
    }),
    (o.reverse = function () {
      c(), (o.completed = !o.reversed), v();
    }),
    (o.restart = function () {
      o.reset(), o.play();
    }),
    (o.remove = function (s) {
      var f = ro(s);
      Yc(f, o);
    }),
    o.reset(),
    o.autoplay && o.play(),
    o
  );
}
function ya(e, n) {
  for (var t = n.length; t--; ) Xu(e, n[t].animatable.target) && n.splice(t, 1);
}
function Yc(e, n) {
  var t = n.animations,
    r = n.children;
  ya(e, t);
  for (var l = r.length; l--; ) {
    var i = r[l],
      u = i.animations;
    ya(e, u), !u.length && !i.children.length && r.splice(l, 1);
  }
  !t.length && !r.length && n.pause();
}
function Gp(e) {
  for (var n = ro(e), t = De.length; t--; ) {
    var r = De[t];
    Yc(n, r);
  }
}
function Zp(e, n) {
  n === void 0 && (n = {});
  var t = n.direction || 'normal',
    r = n.easing ? Zu(n.easing) : null,
    l = n.grid,
    i = n.axis,
    u = n.from || 0,
    a = u === 'first',
    o = u === 'center',
    c = u === 'last',
    p = T.arr(e),
    v = parseFloat(p ? e[0] : e),
    h = p ? parseFloat(e[1]) : 0,
    w = nn(p ? e[1] : e) || 0,
    y = n.start || 0 + (p ? v : 0),
    m = [],
    L = 0;
  return function (d, s, f) {
    if ((a && (u = 0), o && (u = (f - 1) / 2), c && (u = f - 1), !m.length)) {
      for (var g = 0; g < f; g++) {
        if (!l) m.push(Math.abs(u - g));
        else {
          var E = o ? (l[0] - 1) / 2 : u % l[0],
            k = o ? (l[1] - 1) / 2 : Math.floor(u / l[0]),
            _ = g % l[0],
            P = Math.floor(g / l[0]),
            R = E - _,
            N = k - P,
            J = Math.sqrt(R * R + N * N);
          i === 'x' && (J = -R), i === 'y' && (J = -N), m.push(J);
        }
        L = Math.max.apply(Math, m);
      }
      r &&
        (m = m.map(function (ee) {
          return r(ee / L) * L;
        })),
        t === 'reverse' &&
          (m = m.map(function (ee) {
            return i ? (ee < 0 ? ee * -1 : -ee) : Math.abs(L - ee);
          }));
    }
    var je = p ? (h - v) / L : v;
    return y + je * (Math.round(m[s] * 100) / 100) + w;
  };
}
function Xp(e) {
  e === void 0 && (e = {});
  var n = Q(e);
  return (
    (n.duration = 0),
    (n.add = function (t, r) {
      var l = De.indexOf(n),
        i = n.children;
      l > -1 && De.splice(l, 1);
      function u(h) {
        h.passThrough = !0;
      }
      for (var a = 0; a < i.length; a++) u(i[a]);
      var o = Ml(t, qi(Gu, e));
      o.targets = o.targets || e.targets;
      var c = n.duration;
      (o.autoplay = !1),
        (o.direction = n.direction),
        (o.timelineOffset = T.und(r) ? c : no(r, c)),
        u(n),
        n.seek(o.timelineOffset);
      var p = Q(o);
      u(p), i.push(p);
      var v = Qc(i, e);
      return (
        (n.delay = v.delay),
        (n.endDelay = v.endDelay),
        (n.duration = v.duration),
        n.seek(0),
        n.reset(),
        n.autoplay && n.play(),
        n
      );
    }),
    n
  );
}
Q.version = '3.2.1';
Q.speed = 1;
Q.suspendWhenDocumentHidden = !0;
Q.running = De;
Q.remove = Gp;
Q.get = eo;
Q.set = Wc;
Q.convertPx = qu;
Q.path = Up;
Q.setDashoffset = Fp;
Q.stagger = Zp;
Q.timeline = Xp;
Q.easing = Zu;
Q.penner = Ic;
Q.random = function (e, n) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
};
const Jp = 'https://api.quotable.io/random';
function qp() {
  const e = Q({
      targets: '.card',
      rotateX: '360deg',
      loop: !1,
      autoplay: !1,
      duration: 3e3
    }),
    [n, t] = Ht.useState({
      _id: 'some-id',
      content: 'Some quote here...',
      dateAdded: '2024-06-05'
    }),
    r = `${n.dateAdded.split('-')[0]} #${n._id.slice(0, 3)}`;
  async function l() {
    try {
      const i = await fetch(Jp);
      if ((e.restart(), !i.ok)) throw new Error();
      const u = await i.json();
      t(u);
    } catch {
      t({
        _id: 'ERROR',
        content:
          'We are facing issues while getting a quote, you can try again later!',
        dateAdded: new Date().toISOString().split('T')[0]
      });
    }
  }
  return (
    Ht.useEffect(function () {
      l().then(null);
    }, []),
    Ze.jsxs('div', {
      className: 'card',
      children: [
        Ze.jsxs('h1', { className: 'quote-id', children: ['Quote ', r] }),
        Ze.jsx('blockquote', { className: 'quote', children: n.content }),
        Ze.jsx('img', {
          className: 'divider',
          src: './images/pattern-divider-mobile.svg',
          alt: 'Divider Icon'
        }),
        Ze.jsx('img', {
          className: 'divider desk',
          src: './images/pattern-divider-desktop.svg',
          alt: 'Divider Icon'
        }),
        Ze.jsx('div', {
          className: 'card-img',
          onClick: l,
          children: Ze.jsx('img', {
            className: 'dice-icon',
            src: './images/icon-dice.svg',
            alt: 'Dice Icon'
          })
        })
      ]
    })
  );
}
ii.createRoot(document.getElementById('root')).render(
  Ze.jsx(ff.StrictMode, { children: Ze.jsx(qp, {}) })
);
