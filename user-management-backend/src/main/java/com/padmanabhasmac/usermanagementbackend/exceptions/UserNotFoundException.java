package com.padmanabhasmac.usermanagementbackend.exceptions;

/**
 * @author padmanabhadas
 */

public class UserNotFoundException extends RuntimeException {

    /**
     * Constructs a new runtime exception with the specified detail message.
     * The cause is not initialized, and may subsequently be initialized by a
     * call to {@link #initCause}.
     *
     * @param userId the detail message. The detail message is saved for
     *                later retrieval by the {@link #getMessage()} method.
     */
    public UserNotFoundException(Long userId) {
        super("Couldn't found the user with id " + userId);
    }
}
