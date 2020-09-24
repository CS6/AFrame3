import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="Logo">
      <img
        alt
        style={{ "height": '175px', "width": '175px' }}
        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1592796428548x983006402300051700%2FMyLog2732.png?w=256&amp;h=256&amp;auto=compress&amp;fit=crop&amp;dpr=2"
      />
    </div>
  );
}

export default Logo;


// const styles = ({
//   inputContainer: {
//     flexWrap: 'wrap',
//     alignItems: 'flex-start',
//     flexDirection: 'row',
//     paddingTop: 2,
//     paddingRight: 3,
//     paddingBottom: 2,
//     paddingLeft: 4,
//     fontSize: 12,
//     borderColor: "#e24c48",
//     color: '#e24c48',
//     flex: 1,
//     marginHorizontal: 3,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: 'rgba(200,200,200,0.5)'
//   },
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });