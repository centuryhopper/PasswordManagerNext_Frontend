import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { AccountType, dialogType, updateDialogType } from '../../interfaces/interfaces';

interface Props
{
    onDialog: (choose: boolean, updatedAccount: AccountType) => Promise<void>,
    handleDialog: (message: string, isLoading: boolean, account: AccountType) => void,
    dialog: updateDialogType,
    account: AccountType,
}

export const UpdateDialog : FC<Props> = ({onDialog, handleDialog, dialog, account}) : JSX.Element =>
{
    const [title, setTitle] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <>
        <Modal show={dialog.isLoading} onHide={() => handleDialog('', false, {})}>
            <Modal.Header closeButton>
            <Modal.Title>{dialog.account.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {dialog.message}
                {JSON.stringify(account)}

                <Form>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a new title..."
                            onChange={e => setTitle(e.target.value)}
                            // value={account.title!}
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ControlInput2">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a new username..."
                            onChange={e => setUserName(e.target.value)}
                            // value={account.username!}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ControlInput3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a new password..."
                            onChange={e => setPassword(e.target.value)}
                            // value={account.password!}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={() => onDialog(false, {})}>
                Close
            </Button>
            <Button type='submit' variant="primary" onClick={() => onDialog(true, {id: account.id, title, username, password})}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

