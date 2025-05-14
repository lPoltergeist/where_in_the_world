import { infoRowProps } from '@/types/infoRow'
import React from 'react'

const InfoRow = ({ label, value }: infoRowProps) => {
    return (
        <p><strong>{label}</strong> {value}</p>
    )
}

export default InfoRow