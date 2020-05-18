import React from 'react'

function PostOfficeDetails(props) {
    return (
        <div>
            <div>
                <table>
                    <tr>
                        <th>
                            Name
                                </th>
                        <th>
                            Description
                                </th>
                        <th>
                            Branch Type
                                </th>
                        <th>
                            Delivery Status
                                </th>
                        <th>
                            Circle
                                </th>
                    </tr>
                    <tr>
                        <td>
                            {props.data.Name}
                        </td>
                        <td>
                            {props.data.Description}
                        </td>
                        <td>
                            {props.data.BranchType}
                        </td>
                        <td>
                            {props.data.DeliveryStatus}
                        </td>
                        <td>
                            {props.data.Circle}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default PostOfficeDetails
