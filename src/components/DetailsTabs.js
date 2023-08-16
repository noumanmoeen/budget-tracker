import React from 'react'
import { Tab, Tabs } from './Tabs'

export const DetailsTabs = () => {
  return (
    <div>
        <Tabs>
        <Tab label="Monthly">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Monthly</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </Tab>
        <Tab label="Yearly">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Yearly</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
