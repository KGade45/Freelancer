import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser);


export default function FreelancerHomepage() {
  const renderSpans = () => {
    return [...Array(6)].map((_, index) => (
      <span
        key={index}
        className="badge rounded-pill text-bg-secondary"
        style={{ marginRight: '20px' }}
      >
        Req skill {index + 1}
      </span>
    ));
  };

  const renderJobSection = () => {
    return (
      <div>
        <h4>Job Title</h4>
        <div className="price-postedtime my-3">
          <p>
            <span className="faded-text" style={{ opacity: '0.5' }}>
              Price and posted time
            </span>
          </p>
        </div>
        <p>
          Job Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni cum
          harum nobis rerum necessitatibus quaerat ullam alias eveniet accusantium. Totam vel cum
          saepe incidunt deleniti amet, delectus quaerat repellat?
        </p>
        <div className="form-group">{renderSpans()}</div>
        <div className="clientname my-3">
          <p>
            <span className="faded-text" style={{ opacity: '0.5' }}>
              Client Name
            </span>
          </p>
        </div>
      </div>
    );
  };

  const renderUserInfo = () => {
    return (
      <div className="userinfo2">
        <div className="profile-header">
          <div className="profile-icon-container">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </div>
          <div className="profile-details">
            <h6>UserName</h6>
            <p className="light-skills"style={{fontWeight:'lighter'}}>Skill 1 | Skill 2 | Skill 3</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-card p-3 mt-5">
      <div className="search-bar text-center row" style={{ marginLeft:'2%',marginRight:'30%'}}>
  <div className="col">
  <input
      type="text"
      name="search"
      placeholder="Search"
      className="form-control form-control-lg"
      style={{ borderRadius: '20px', padding: '10px 40px', background: '#f9f9f9' }}
    />
  </div>
</div>


      <div className="row">
        <div className="col-md-8" style={{ marginLeft: '40px' }}>
          <div className="card p-3 mt-5 joblisting">
            <h3>Jobs you might like</h3>
            <hr />
            {renderJobSection()}
            <hr className="differentiator-line" />
            {renderJobSection()}
          </div>
        </div>
        <div className="col-md-3 text-center"  style={{ marginTop: '50px', borderRadius: '15px',marginRight:'5%' }}>
          <div className="card userinfo">
            {renderUserInfo()}
          </div>
        </div>
      </div>
    </div>
  );
}
