import React, { useState } from "react"

import FormService from "~/services/FormService"

import Button from "@Elements/Button"
import SectionHeader from "@Elements/SectionHeader"

const DownloadSection = ({ formId }) => {
    const [showDLLoader, setShowDLLoader] = useState(false)

    const handleDownloadFile = () => {
        setShowDLLoader(true)
        FormService.downloadFile(formId).then(() => setShowDLLoader(false))
    }

    const allowDL = formId ? true : false

    if (allowDL) {
        return (
            <>
                <SectionHeader title="DOWNLOAD" subtitle="Download your valuation model" />
                <div className="sectionHeader">
                    <div className="mb-8 font-medium text-gray-500">Success! Download your model below.</div>
                    <Button
                        onClick={handleDownloadFile}
                        value="Download"
                        wrapperStyle="w-20 h-8 text-sm"
                        buttonStyle="h-full w-full rounded font-bold bg-theme-lighter text-theme hover:bg-theme-light active:bg-theme-medium text-center"
                    />
                    <DownloadLoader showDLLoader={showDLLoader} />
                </div>
                <div className="h-24"></div>
            </>
        )
    } else {
        return (
            <>
                <SectionHeader title="DOWNLOAD" subtitle="Download your valuation model" />
                <div className="sectionHeader">
                    <div className="mb-8 font-medium text-gray-500">
                        <span>
                            Whoops! It looks like you either haven't finished configuring your model, or you've just
                            refreshed your page. Please return to the
                        </span>
                        <img src="/images/config.png" className="mx-2 w-4 h-4 inline" alt="settings" />
                        <span>Configuration page to continue.</span>
                    </div>
                </div>
                <div className="h-24"></div>
            </>
        )
    }
}

const DownloadLoader = ({ showDLLoader }) => {
    if (showDLLoader) {
        return (
            <div className="space-x-3 text-sm pt-4">
                <img className="animate-spin inline w-4 h-4" src="/images/loading.png" alt="loading" />
                <span className="inline font-semibold text-gray-500">Generating your file</span>
            </div>
        )
    } else {
        return <></>
    }
}

export default DownloadSection
