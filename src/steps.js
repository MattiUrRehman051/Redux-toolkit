

// 1:-  sab say pahlay store banana hia 
// 2:-  phir reducers banian gay jiss ko redux toolkit main slice kahtay hian
// 3:- phir un reducers ko export kar dain gay pahly individully components main use karnay kay liya and phir complete reducers takay store main use kar sakian 
// 4:- phir store main import kar dain gay reducers ko
// 5:- phir apnay components banian gay jahaan hum nay use karna hia use-dispatch or use-selectors ko
// 6:- dispatch jo hia wo reducer kay through store main value ko add karta hia
// 7:- values ko access karna hia to useSelector kay thorugh kar saktay hian or aggar koi action perform karna hia yah functionality run karni hia to wo useDispatch say kar sakta hon
// 8:- ab aggar jo values add ki hia wo sari action.payload main store hoti hian usii main sari value store hoti hian.


// important points:-
// koi be action lana ho ga to us ko dispatch be karna ho ga























// Redux toolkit ki notes
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions) method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// state = state value in the store
// action = action.payload 
// export individual functionality 
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai