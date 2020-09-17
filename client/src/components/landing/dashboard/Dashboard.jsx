import React from 'react';
import DashPanel from "./DashPanel";

export default function Dashboard ({profile}) {

  return (
    <div id="dashboard">
      <h2 className='dashboard-header'>Let's get you Nomadory verified for {profile.businessName || 'your business'}</h2>

      <DashPanel
        header="Business Profile"
        text="We'll ask you questions about your business"
        isComplete={profile.businessProfileComplete}
        push={"/businessProfile"}
      />

      <DashPanel
        header="Wholesale Experience"
        text="We'll ask you about your business and current operations"
        isComplete={false}
        push={"/deadend"}
      />

      <DashPanel
        header="Workforce Details"
        text="We'll ask for some required details about your workforce and other rights, conditions, and compensation standards"
        isComplete={false}
        push={"/deadend"}
      />

      <DashPanel
        header="Health & Safety and Environment"
        text="We'll ask about the health & safety and environment practices of your business"
        isComplete={false}
        push={"/deadend"}
      />

      <DashPanel
        header="Additional Guidelines and Other Requirements"
        text="We'll ask about any new policies that are required"
        isComplete={false}
        push={"/deadend"}
      />

    </div>
  )
};