import React, { useState } from "react"

import Button from "@Elements/Button"
import ConfirmationIndicator from "@Elements/ConfirmationIndicator"
import FieldLabel from "@Elements/FieldLabel"

import TextFieldOptional from "@Modules/TextFieldOptional"

const AddComparables = ({ responses, setResponses }) => {
    const [newComp, setNewComp] = useState("")
    const [newCompCiq, setNewCompCiq] = useState("")
    const [showConfirm, setShowConfirm] = useState(false)
    const [alerts, setAlerts] = useState({
        addCompany: false,
        addCiqTicker: false,
    })

    const handleNewCompChange = (event) => {
        setNewComp(event.target.value)
        setAlerts({ ...alerts, [event.target.id]: false })
    }

    const handleNewCompCiqChange = (event) => {
        setNewCompCiq(event.target.value)
        setAlerts({ ...alerts, [event.target.id]: false })
    }

    const handleShowConfirm = () => {
        if (!showConfirm) {
            setShowConfirm(true)
            setTimeout(() => {
                setShowConfirm(false)
            }, 3000)
        } else {
            setShowConfirm(false)
        }
    }

    const handleAlerts = () => {
        let returnValue = true
        let newAlerts = JSON.parse(JSON.stringify(alerts))
        if (String(newComp).trim() === "" || String(newComp).trim() === null) {
            newAlerts.addCompany = true
            returnValue = false
        } else {
            newAlerts.addCompany = false
        }
        if (String(newCompCiq).trim() === "" || String(newCompCiq).trim() === null) {
            newAlerts.addCiqTicker = true
            returnValue = false
        } else {
            newAlerts.addCiqTicker = false
        }
        setAlerts(newAlerts)

        return returnValue
    }

    const addOrUpdateComp = (event) => {
        event.preventDefault()
        if (handleAlerts()) {
            const newEntry = { name: newComp, ciqId: newCompCiq }
            if (responses.comps.filter((comp) => comp.name === newComp).length > 0) {
                if (window.confirm(`${newComp} already exists. Update with new Capital IQ ticker?`)) {
                    setResponses({
                        ...responses,
                        comps: responses.comps.map((comp) => {
                            if (comp.name === newComp) return newEntry
                            else return comp
                        }),
                    })
                }
            } else {
                setResponses({
                    ...responses,
                    comps: [...responses.comps, newEntry],
                })
            }
            setNewComp("")
            setNewCompCiq("")
            handleShowConfirm()
        }
    }

    return (
        <div className="mb-4 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
            <div className="align-middle">
                <FieldLabel label="Add company" />
            </div>
            <TextFieldOptional
                value={newComp}
                placeholder="Company name"
                onChange={handleNewCompChange}
                showAlert={alerts.addCompany}
                id="addCompany"
            />
            <TextFieldOptional
                value={newCompCiq}
                placeholder="Stock ticker / CIQ ticker"
                onChange={handleNewCompCiqChange}
                showAlert={alerts.addCiqTicker}
                id="addCiqTicker"
            />
            <div className="flex flex-row align-middle space-x-3">
                <Button
                    onClick={addOrUpdateComp}
                    value="Add"
                    wrapperStyle="w-20 h-8 text-sm"
                    buttonStyle="h-full w-full rounded font-bold bg-theme-lighter text-theme hover:bg-theme-light active:bg-theme-medium text-center"
                />
                <ConfirmationIndicator showConfirm={showConfirm} handleShowConfirm={handleShowConfirm} />
            </div>
        </div>
    )
}

export default AddComparables
