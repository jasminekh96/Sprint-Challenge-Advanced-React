import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './components/Navbar';
import { useDarkMode } from './hooks/useDarkMode';
import { useLocalStorage } from './hooks/useLocalStorage';

test('NavBar renders without crashing', () => {
	const wrapper = rtl.render(<Navbar />);
	console.log(wrapper.debug());
});
test('App renders without crashing', () => {
	const wrapper = rtl.render(<App />);
	console.log(wrapper.debug());
});
test('DarkMode renders without crashing', () => {
	const wrapper = rtl.render(<useDarkMode />);
	console.log(wrapper.debug());
});
test('LocalStorage renders without crashing', () => {
	const wrapper = rtl.render(<useLocalStorage />);
	console.log(wrapper.debug());
});
it('Name rendering from the data', () => {
	const wrapper = rtl.render(<App />);
	const WendieName = wrapper.queryAllByText(/Wendie/i);
});
