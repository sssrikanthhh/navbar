const Links = ({ linksArr }) => {
  return (<div>
    <ul claasName='links'>{linksArr.map(link => {
      return <li>{link}</li>;
    })}</ul>
  </div>);
};

export default Links;