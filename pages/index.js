import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>import numpy as np
import matplotlib.pyplot as plt
def local_regression(x0, X, Y, tau):
 x0 = [1, x0] 
 X = [[1, i] for i in X]
 X = np.asarray(X)
 xw = (X.T) * np.exp(np.sum((X - x0) ** 2, axis=1) / (-2 * tau))
 beta = np.linalg.pinv(xw @ X) @ xw @ Y @ x0 
 return beta 
def draw(tau):
 prediction = [local_regression(x0, X, Y, tau) for x0 in domain]
 plt.plot(X, Y, 'o', color='black')
 plt.plot(domain, prediction, color='red')
 plt.show()
X = np.linspace(-3, 3, num=1000)
domain = X
Y = np.log(np.abs(X ** 2 - 1) + .5)
draw(10)
draw(0.1)
draw(0.01)
draw(0.001)</body>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
