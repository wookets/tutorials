package org.acme.quickstart

import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.PathParam
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/")
class HelloController {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/hello/{name}")
    fun hello(@PathParam("name") name:String): String {
        return "hello " + name
    }

}