// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Others = () => {
  return <div>
    <h3>Meter</h3>
    <p><meter value="100" max="100" low="70" high="90">100%</meter> A meter displaying 100%.</p>
    <p><meter value="85" max="100" low="70" high="90">85%</meter> A meter displaying 85%.</p>
    <p><meter value="50" max="100" low="70" high="90">50%</meter> A meter displaying 50%.</p>
    <p><meter value="0" max="100" low="70" high="90">0%</meter> A meter displaying 0%.</p>

    <h3>Progress</h3>
    <p><progress value="100" max="100">100%</progress> A progress displaying 100%.</p>
    <p><progress value="85" max="100">85%</progress> A progress displaying 85%.</p>
    <p><progress value="50" max="100">50%</progress> A progress displaying 50%.</p>
    <p><progress value="0" max="100">0%</progress> A progress displaying 0%.</p>

    <h3>Preformat</h3>
    <pre>
    P R E F O R M A T T E D T E X T
    ! " # $ % &amp; ' ( ) * + , - . /
    0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
    @ A B C D E F G H I J K L M N O
    P Q R S T U V W X Y Z [ \ ] ^ _
    ` a b c d e f g h i j k l m n o
    p q r s t u v w x y z  ~
    </pre>

    <h3>Pre Code</h3>
    <pre><code>&lt;html>
      &lt;head>
      &lt;/head>
      &lt;body>
          &lt;div class="main"> &lt;div>
      &lt;/body>
    &lt;/html></code></pre>

    <h3>Table</h3>

    <table>
      <caption>Table Caption</caption>
      <thead>
        <tr>
          <th scope="col">thead th</th>
          <th scope="col">thead th</th>
          <th scope="col">thead th</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tbody td</td>
          <td>tbody td</td>
          <td>tbody td</td>
        </tr>
        <tr>
          <td>tbody td</td>
          <td>tbody td</td>
          <td>tbody td</td>
        </tr>
        <tr>
          <td>tbody td</td>
          <td>tbody td</td>
          <td>tbody td</td>
        </tr>
      </tbody>
    </table>
  </div>
}