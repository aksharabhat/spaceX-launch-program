import React from 'react';
import Head from "next/head";
import Link from 'next/link';


class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="root">
        <Head>
          <title>
            SpaceX Launch Programs
            </title>
           
        </Head>
        <header>
          <h1 style={{ marginLeft: 10 }}> SpaceX Launch Programs</h1>
        </header>

        {children}

        <footer style={{ textAlign: "center" }}>
          <h5>Developed By: Akshara C Bhat </h5>
        </footer>

      </div>
    );
  }
}
export default (Layout);