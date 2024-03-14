# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!--  All Process


1. npm install redux  

2.  npm install reacr-redux

3. Create store folder with Index.js file

4. Creating the store using

    Import {createStore} = from redux

5. Providing the store with react
    1. Provider from react-redux
    2. <Provider store = {store}> </App> </Provider>

6. Using the store
    1. useSelector hook gets a slice of the store.
        const counter = useSelector(state => state.counter);
    2. Subcription is already setup and only will re-execute 
        when only your slice is changed . Suncription is automatically cleared also.

7. Dispatch Actions using the useDispatch hook.
 -->