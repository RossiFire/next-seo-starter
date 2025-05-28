import Script from 'next/script'
import { WithContext } from 'schema-dts'
import { SchemaType, SchemaTypeMap } from '@/lib/microdata'

interface MicrodataScriptProps {
    id: string
    microdata: WithContext<SchemaTypeMap[SchemaType]>
}

export const MicrodataScript = ({ id, microdata }: MicrodataScriptProps) => {
  return (
    <Script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(microdata) }}
    />
  )
}