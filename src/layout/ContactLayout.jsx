import { NavLink, Outlet } from "react-router-dom";
function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam magni
        consectetur rerum exercitationem vero optio incidunt, sed doloribus
        corporis obcaecati natus ex accusamus nostrum asperiores odit delectus
        cumque saepe tenetur. Fugit perferendis recusandae tenetur deleniti
        veniam, dolorem fuga quia animi illo ipsam nisi adipisci illum impedit
        sint unde sapiente similique!
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="form">FORM</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
export default ContactLayout;
